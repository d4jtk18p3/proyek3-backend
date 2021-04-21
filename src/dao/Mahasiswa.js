import Mahasiswa from '../models/Mahasiswa'

export const findMahasiswaByNIM = async (NIM) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      where: {
        NIM
      }
    })
    return mahasiswa[0]
  } catch (error) {
    console.error(error)
  }
}

export const insertOneMahasiswa = async (
  NIM,
  namaMahasiswa,
  angkatan,
  tingkat,
  email,
  nomorHp,
  urlFoto,
  status,
  username,
  permissions
) => {
  try {
    const mahasiswa = await Mahasiswa.create({
      NIM,
      nama_mahasiswa: namaMahasiswa,
      angkatan,
      tingkat,
      email,
      nomor_hp: nomorHp,
      url_foto: urlFoto,
      status,
      username,
      permissions
    })
    return mahasiswa
  } catch (error) {
    console.error(error)
  }
}

export const deleteMahasiswabyId = async (idMahasiswa) => {
  try {
    const result = await Mahasiswa.destroy({
      where : {id_mahasiswa: idMahasiswa}
    })
    return result
  } catch (error) {
    console.log(error)
  }
}
