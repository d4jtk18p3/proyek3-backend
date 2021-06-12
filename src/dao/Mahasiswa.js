import Mahasiswa from '@proyek3/postgres-database/models/Mahasiswa'
import sequelize from '@proyek3/postgres-database/db'

export const getOneMahasiswaByNIM = async (NIM) => {
  try {
    const mahasiswa = await Mahasiswa.findOne({
      where: {
        nim: NIM
      }
    })
    return mahasiswa
  } catch (error) {
    return Promise.reject(new Error('Error get one mahasiswa'))
  }
}

export const findAllMahasiswa = async () => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      order: [['NIM', 'ASC']]
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
        nama_mahasiswa: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('nama_mahasiswa')),
          'LIKE',
          '%' + nama.toLowerCase() + '%'
        )
      },
      order: [['nama_mahasiswa', 'ASC']]
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
        nim: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('nim')),
          'LIKE',
          '%' + NIM.toLowerCase() + '%'
        )
      },
      order: [['nim', 'ASC']]
    })
    return mahasiswa
  } catch (error) {
    console.error(error)
  }
}

export const insertOneMahasiswa = async (
  NIM,
  namaMahasiswa,
  kodeKelas,
  email,
  nomorHp,
  urlFoto
) => {
  try {
    const mahasiswa = await Mahasiswa.create({
      nim: NIM,
      nama: namaMahasiswa,
      kode_kelas: kodeKelas,
      email,
      nomor_ponsel: nomorHp,
      url_foto: urlFoto
    })
    return mahasiswa
  } catch (error) {
    console.error(error)
  }
}

export const updateNomorHpMahasiswa = async (NIM, nomorHP) => {
  try {
    const mahasiswa = await Mahasiswa.update(
      {
        nomor_hp: nomorHP
      },
      {
        where: {
          NIM
        },
        silent: true
      }
    )
    return mahasiswa[0]
  } catch (error) {
    console.error(error)
  }
}

export const deleteMahasiswabyId = async (nim) => {
  try {
    const result = await Mahasiswa.destroy({
      where: {
        nim
      }
    })
    return result
  } catch (error) {
    return Promise.reject(new Error('Delete mahasiswa by NIM gagal'))
  }
}

export const getMahasiswaByKelas = async (kodeKelas) => {
  try {
    const resultMahasiswa = await Mahasiswa.findAll({
      where: {
        kode_kelas: kodeKelas
      },
      order: [['nim', 'ASC']]
    })
    return resultMahasiswa
  } catch (error) {
    return Promise.reject(error)
  }
}
