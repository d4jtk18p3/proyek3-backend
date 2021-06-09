import { insertOneDosen, destroyDosenByNip } from '../dao/Dosen'
import { insertOneMahasiswa, deleteMahasiswabyId } from '../dao/Mahasiswa'
import { insertOneTataUsaha, deleteTataUsahaByNIP } from '../dao/TataUsaha'
import { validationResult } from 'express-validator/check'
import { getAdminClient, adminAuth } from '../config/keycloak-admin'
import { uuid } from 'uuidv4'
import jwt from 'jsonwebtoken'
import { resetPassword } from '../util/mailer/mailer'

export const createUser = async (req, res, next) => {
  try {
    const validatonResult = validationResult(req)
    console.log(`Sampai disini ${validatonResult}`)
    if (!validatonResult.isEmpty()) {
      const error = new Error('Invalid Input')
      error.statusCode = 400
      error.cause = validatonResult.errors
      throw error
    }

    const kcAdminClient = getAdminClient()
    await adminAuth(kcAdminClient)

    const { noInduk, jenisNoInduk, nama, email, role } = req.body
    let result

    if (jenisNoInduk === 'nim' && role === 'mahasiswa') {
      result = await insertOneMahasiswa(noInduk, nama, null, email, null, null)

      if (typeof result === 'undefined') {
        const error = new Error('Insert Mahasiswa ke pg gagal')
        error.statusCode = 500
        error.cause = 'Insert Mahasiswa ke pg gagal'
        throw error
      }
    } else if (jenisNoInduk === 'nip' && role === 'dosen') {
      result = await insertOneDosen(noInduk, nama)
      if (typeof result === 'undefined') {
        const error = new Error('Insert dosen ke pg gagal')
        error.statusCode = 500
        error.cause = 'Insert dosen ke pg gagal'
        throw error
      }
    } else if (jenisNoInduk === 'nip' && role === 'tata_usaha') {
      result = await insertOneTataUsaha(noInduk, nama)
      if (typeof result === 'undefined') {
        const error = new Error('Insert tu ke pg gagal')
        error.statusCode = 500
        error.cause = 'Insert tu ke pg gagal'
        throw error
      }
    }

    const tempPassword = uuid() // this is random password for keycloak

    const resultInsertToKc = await kcAdminClient.users.create({
      realm: 'Polban-Realm',
      username: noInduk,
      email: email,
      enabled: true,
      credentials: [
        {
          temporary: false,
          type: 'password',
          value: tempPassword
        }
      ],
      attributes: {
        noInduk: noInduk,
        mail: email,
        uname: noInduk,
        role: role,
        isActive: true
      }
    })
    result.dataValues.idUserKc = resultInsertToKc.id

    result.dataValues.tempPwdKc = tempPassword

    res.status(200).json({
      message: 'insert user sukses',
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const getAllUser = async (req, res, next) => {
  try {
    const kcAdminClient = getAdminClient()
    await adminAuth(kcAdminClient)

    const roleParams = req.query.role || ''
    const key = req.query.key || ''
    const page = req.query.page || 1
    const perPage = req.query.perpage || 10
    console.log(page)
    console.log(perPage)

    const result = await kcAdminClient.users.find({
      realm: 'Polban-Realm'
    })
    const resultFiltered = []

    for (const elementData of result) {
      let cond1 =
        elementData.attributes.role[0].toLowerCase() ===
        roleParams.toLowerCase()
      if (roleParams === '') {
        cond1 = true
      }
      const cond2 = elementData.username
        .toLowerCase()
        .includes(key.toLowerCase())
      const cond3 = elementData.email.toLowerCase().includes(key.toLowerCase())
      if (cond1 && (cond2 || cond3)) {
        resultFiltered.push(elementData)
      }
    }
    // resultFiltered.slice((page - 1) * perPage, page * perPage)
    res.status(200).json({
      message: 'Success retrieve all user data',
      data: resultFiltered
    })
  } catch (error) {
    next(error)
  }
}

export const deleteUserbyUsername = async (req, res, next) => {
  try {
    const kcAdminClient = getAdminClient()
    await adminAuth(kcAdminClient)

    const { username } = req.params

    const userKc = await kcAdminClient.users.find({
      username: username,
      realm: 'Polban-Realm'
    })

    if (userKc.length === 0) {
      const error = new Error('Username tidak ditemukan')
      error.statusCode = 400
      error.cause = 'Username tidak ditemukan'
      throw error
    }

    let resultDeleteOnDB

    if (userKc[0].attributes.role[0] === 'mahasiswa') {
      resultDeleteOnDB = await deleteMahasiswabyId(
        userKc[0].attributes.noInduk[0]
      )
    } else if (userKc[0].attributes.role[0] === 'dosen') {
      resultDeleteOnDB = await destroyDosenByNip(
        userKc[0].attributes.noInduk[0]
      )
    } else if (userKc[0].attributes.role[0] === 'tata_usaha') {
      resultDeleteOnDB = await deleteTataUsahaByNIP(
        userKc[0].attributes.noInduk[0]
      )
    }

    if (resultDeleteOnDB instanceof Error) {
      throw resultDeleteOnDB
    }

    await kcAdminClient.users.del({
      id: userKc[0].id,
      realm: 'Polban-Realm'
    })

    res.status(200).json({
      message: 'Delete akun berhasil',
      data: username
    })
  } catch (error) {
    next(error)
  }
}

export const updateAccount = async (req, res, next) => {
  try {
    const validatonResult = validationResult(req)
    if (!validatonResult.isEmpty()) {
      const error = new Error('Invalid Input')
      error.statusCode = 400
      error.cause = validatonResult.errors
      throw error
    }

    const kcAdminClient = getAdminClient()
    await adminAuth(kcAdminClient)

    const { username, newEmail, newStatus } = req.body

    const userKc = await kcAdminClient.users.find({
      username: username,
      realm: 'Polban-Realm'
    })

    if (userKc.length === 0) {
      const error = new Error('Username tidak ditemukan')
      error.statusCode = 400
      error.cause = 'Username tidak ditemukan'
      throw error
    }

    const role = userKc[0].attributes.role[0]
    const noInduk = userKc[0].username

    await kcAdminClient.users.update(
      {
        id: userKc[0].id,
        realm: 'Polban-Realm'
      },
      {
        enabled: newStatus,
        email: newEmail,
        attributes: {
          noInduk: noInduk,
          role: role,
          uname: noInduk,
          mail: newEmail,
          isActive: newStatus
        }
      }
    )

    const updatedUserKc = await kcAdminClient.users.find({
      username: username,
      realm: 'Polban-Realm'
    })

    res.status(200).json({
      message: 'Update akun berhasil',
      data: updatedUserKc
    })
  } catch (error) {
    next(error)
  }
}

export const resetPasswordRequest = async (req, res, next) => {
  try {
    const validatonResult = validationResult(req)
    if (!validatonResult.isEmpty()) {
      const error = new Error('Invalid Input')
      error.statusCode = 400
      error.cause = validatonResult.errors
      throw error
    }
    const kcAdminClient = getAdminClient()
    await adminAuth(kcAdminClient)

    const email = req.body.email

    const userKc = await kcAdminClient.users.find({
      email: email,
      realm: 'Polban-Realm'
    })

    if (userKc.length === 0) {
      const error = new Error('Akun tidak ditemukan')
      error.statusCode = 400
      error.cause = 'Akun dengan email tersebut tidak ditemukan'
      throw error
    }

    const token = jwt.sign(
      { userId: userKc[0].id },
      process.env.RESET_EMAIL_PRIVATE_KEY,
      { expiresIn: 60 * 60 * 15 }
    )

    await resetPassword(email, userKc[0].username, token)

    res.status(200).json({
      message: 'Kami telah mengirim email untuk melakukan reset password'
    })
  } catch (e) {
    next(e)
  }
}

export const processResetPassword = async (req, res, next) => {
  try {
    const validatonResult = validationResult(req)
    if (!validatonResult.isEmpty()) {
      const error = new Error('Invalid Input')
      error.statusCode = 400
      error.cause = validatonResult.errors
      throw error
    }

    const kcAdminClient = getAdminClient()
    await adminAuth(kcAdminClient)

    const { token, newPassword, hint } = req.body

    const decodedToken = jwt.verify(token, process.env.RESET_EMAIL_PRIVATE_KEY)
    if (!decodedToken.userId) {
      const error = new Error('Invalid Token')
      error.statusCode = 401
      error.cause = 'Token yang diberikan tidak valid'
      throw error
    }
    const userId = decodedToken.userId

    const userKc = await kcAdminClient.users.findOne({
      id: userId,
      realm: 'Polban-Realm'
    })

    console.log(`User ditemukan yaitu ${userKc.email}`)

    if (!userKc) {
      const error = new Error('User Tidak Terdaftar')
      error.statusCode = 400
      error.cause = 'User tidak terdaftar'
      throw error
    }

    await kcAdminClient.users.resetPassword(
      {
        id: userId,
        realm: 'Polban-Realm',
        credential: {
          temporary: false,
          type: 'password',
          value: newPassword
        }
      }
    )

    res.status(200).json({
      message: 'Berhasil mengubah password baru'
    })
  } catch (e) {
    next(e)
  }
}
