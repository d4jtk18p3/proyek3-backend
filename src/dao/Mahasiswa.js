import Mahasiswa from '../models/Mahasiswa'
import sequelize from '../db.js'

export const findOneMahasiswaByNIM = async (NIM) => {
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

export const findAllMahasiswa = async () => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      order: [
        ['NIM', 'ASC']
      ]
    })
    return mahasiswa
  } catch (error) {
    return Promise.reject(new Error('Get all mahasiswa'))
  }
}

export const findMahasiswaByName = async (nama) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      where: {
        nama_mahasiswa: sequelize.where(sequelize.fn('LOWER', sequelize.col('nama_mahasiswa')), 'LIKE', '%' + nama.toLowerCase() + '%')
      },
      order: [
        ['nama_mahasiswa', 'ASC']
      ]
    })
    return mahasiswa
  } catch (error) {
    console.error(error)
  }
}

export const findMahasiswaByNIM = async (NIM) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      where: {
        NIM: sequelize.where(sequelize.fn('LOWER', sequelize.col('NIM')), 'LIKE', '%' + NIM.toLowerCase() + '%')
      },
      order: [
        ['NIM', 'ASC']
      ]
    })
    return mahasiswa
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

export const updateNomorHpMahasiswa = async (NIM, nomorHP) => {
  try {
    const mahasiswa = await Mahasiswa.update({
      nomor_hp: nomorHP
    },
    {
      where: {
        NIM
      },
      silent: true
    })
    return mahasiswa[0]
  } catch (error) {
    console.error(error)
  }
}

export const deleteMahasiswabyId = async (mahasiswaId) => {
  try {
    const result = await Mahasiswa.destroy({
      where: {
        id_mahasiswa: mahasiswaId
      }
    })
    return result
  } catch (error) {
    console.log(error)
  }
}
