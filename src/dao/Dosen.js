import Dosen from '../models/Dosen.js'

/*
    CATATAN :
  1.File ini berisi seluruh function yang mengakses database
  untuk mendapatkan data yang berkaitan dengan dosen
*/

export const insertOneDosen = async (
  NIP,
  namaDosen,
  jabatan,
  email,
  permissions,
  username
) => {
  try {
    const dosen = await Dosen.create({
      NIP,
      nama_dosen: namaDosen,
      jabatan,
      email,
      permissions,
      username
    })
    return dosen
  } catch (error) {
    console.error(error)
  }
}

export const findDosenByNIP = async (NIP) => {
  try {
    const dosen = await Dosen.findAll({
      where: {
        NIP
      }
    })
    return dosen[0]
  } catch (error) {
    console.error(error)
  }
}
