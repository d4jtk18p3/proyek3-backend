import Akun from '../models/Akun'

export const insertOneAkun = async (username, password, tipe_akun) => {
  try {
    const akun = await Akun.create({
      username,
      password,
      tipe_akun
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
