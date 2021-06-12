import TataUsaha from '../models/Tata_Usaha'

export const insertOneTataUsaha = async (nip, namaStaf) => {
  try {
    const tataUsaha = await TataUsaha.create({
      nip,
      nama_staff: namaStaf
    })
    return tataUsaha
  } catch (error) {
    console.error(error)
  }
}

export const findTataUsahaByNIP = async (nip) => {
  try {
    const tataUsaha = await TataUsaha.findOne({
      where: {
        nip
      }
    })
    return tataUsaha
  } catch (error) {
    return Promise.reject(new Error('find tata usaha by NIP gagal'))
  }
}

export const deleteTataUsahaByNIP = async (nip) => {
  try {
    const tataUsaha = await TataUsaha.destroy({
      where: {
        nip
      }
    })
    return tataUsaha[0]
  } catch (error) {
    return Promise.reject(new Error('Delete tata usaha by NIP gagal'))
  }
}
