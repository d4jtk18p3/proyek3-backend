// import * as DosenDAO from '../dao/Dosen'
import { insertOneMahasiswa } from '../dao/Mahasiswa'
import { validationResult } from 'express-validator/check'
import { getAdminClient } from '../config/keycloak-admin'

export const createUser = async (req, res, next) => {
  try {
    const kcAdminClient = getAdminClient()

    const error = validationResult(req)
    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }

    const { noInduk, jenisNoInduk, nama, email, role, permissions } = req.body

    if (jenisNoInduk === 'nim' && role === 'mahasiswa') {
      const result = await insertOneMahasiswa(
        noInduk,
        nama,
        setAngkatan(noInduk),
        setTingkat(noInduk),
        email,
        null,
        null,
        'aktif',
        null,
        permissions
      )

      if (typeof result === 'undefined') {
        const error = new Error('Insert Mahasiswa ke pg gagal')
        error.statusCode = 500
        error.cause = `Insert Mahasiswa ke pg gagal`
        throw error
      }

      const resultInsertToKc = await kcAdminClient.users.create({
        realm: 'Polban-Realm',
        username: nama,
        email: email,
        enabled: true
      })
      result.dataValues.idUserKc = resultInsertToKc.id

      res.status(200).json({
        message: 'insert user sukses',
        data: result
      })
    }
  } catch (error) {
    next(error)
  }
}

const setAngkatan = (nim) => {
  const strNim = nim
  const getTahunMasuk = strNim.substr(0, 2)
  const angkatan = parseInt('20' + getTahunMasuk)
  return angkatan
}

const setTingkat = (nim) => {
  const strNim = nim
  const getTahunMasuk = strNim.substr(0, 2)
  const angkatan = parseInt('20' + getTahunMasuk)
  const currentYear = new Date().getFullYear()
  return currentYear - angkatan
}
