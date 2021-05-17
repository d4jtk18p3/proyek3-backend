import Akun from '../models/Akun'

export const insertOneAkun = async (username, password, tipeAkun) => {
  try {
    const akun = await Akun.create({
      username,
      password,
      tipe_akun: tipeAkun
    })
    return akun
  } catch (error) {
    console.error(error)
  }
}

export const findAkunByUsername = async (username) => {
  try {
    const akun = await Akun.findAll({
      where: {
        username
      }
    })
    return akun[0]
  } catch (error) {
    console.error(error)
  }
}

export const deleteAkunByUsername = async (username) => {
  try {
    const akun = await Akun.destroy({
      where: {
        username
      }
    })
    return akun
  } catch (error) {
    console.error(error)
  }
}
