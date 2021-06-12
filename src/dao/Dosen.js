import Dosen from '@proyek3/postgres-database/models/Dosen'
// import sequelize from '@proyek3/postgres-database/db'

/*
    CATATAN :
  1.File ini berisi seluruh function yang mengakses database
  untuk mendapatkan data yang berkaitan dengan dosen
*/

export const insertOneDosen = async (NIP, namaDosen, idJabatan) => {
  try {
    const dosen = await Dosen.create({
      nip: NIP,
      nama_dosen: namaDosen,
      id_jabatan: idJabatan
    })
    return dosen
  } catch (error) {
    console.log(error)
  }
}

export const findDosenByNIP = async (NIP) => {
  try {
    const dosen = await Dosen.findOne({
      where: {
        nip: NIP
      }
    })
    return dosen
  } catch (error) {
    console.log(error)
  }
}

export const findAllDosen = async () => {
  try {
    const dosen = await Dosen.findAll()
    return dosen
  } catch (error) {
    return Promise.reject(new Error('Find all dosen gagal'))
  }
}

export const findDosenByJabatan = async (idJabatanDosen) => {
  try {
    if (idJabatanDosen === '') {
      idJabatanDosen = null
      const dosenNoJabatan = await Dosen.findAll({
        where: {
          id_jabatan: null
        },
        order: [['nama_dosen', 'ASC']]
      })
      return dosenNoJabatan
    }
    const dosen = await Dosen.findAll({
      where: {
        // id_jabatan: sequelize.where(
        //   sequelize.fn('LOWER', sequelize.col('id_jabatan')),
        //   'LIKE',
        //   '%' + idJabatanDosen.toLowerCase() + '%'
        // )
        id_jabatan: idJabatanDosen
      },
      order: [['nama_dosen', 'ASC']]
    })
    return dosen
  } catch (error) {
    return Promise.reject(new Error('Find dosen by jabatan gagal'))
  }
}

export const destroyDosenByNip = async (nip) => {
  try {
    const dosen = await Dosen.destroy({
      where: {
        nip
      }
    })
    return dosen
  } catch (error) {
    return Promise.reject(new Error('Delete dosen by NIP gagal'))
  }
}
