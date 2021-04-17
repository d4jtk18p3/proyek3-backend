import Dosen from '../models/Dosen.js'

/*
    CATATAN :
    1.Kalo mau liat Description table di psql, pake petik dua
    Contoh : \d "Dosen"
*/

const insertOneDosen = async (NIP, namaDosen, jabatan) => {
  try {
    const dosen = await Dosen.create({
      NIP,
      namaDosen,
      jabatan
    })
    return dosen
  } catch (error) {
    console.error(error)
  }
}

const DosenDAO = {
  insertOneDosen
}

export default DosenDAO
