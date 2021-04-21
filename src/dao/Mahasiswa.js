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

export const updateNomorHpMahasiswa = async (nim, nomorHP) => {
  try {
    const mahasiswa = await Mahasiswa.update({nomor_hp: nomorHP}, 
      {where : {NIM: nim}}
    )
    return mahasiswa
  } catch (error) {
    console.error(error)
  }
}
