import Perkuliahan from '@proyek3/postgres-database/models/Perkuliahan'
import sequelize from '@proyek3/postgres-database/db'

export const getKuliahByIdTA = async (idKuliah, tahunAkademik) => {
  try {
    const parsedTahunAkademik = parseInt(tahunAkademik)
    const lowerIdKuliah = `%${idKuliah.toLowerCase()}%`
    const result = await sequelize.query(
      'SELECT * FROM "Perkuliahan" WHERE "Perkuliahan".tahun_akademik = ? AND LOWER("Perkuliahan".id_mata_kuliah) LIKE ? ORDER BY "id" ASC',
      {
        replacements: [parsedTahunAkademik, lowerIdKuliah],
        type: sequelize.QueryTypes.SELECT
      }
    )
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getKuliahByKodeKelas = async (kodeKelas) => {
  try {
    const parsedKodeKelas =
      kodeKelas instanceof String ? parseInt(kodeKelas) : kodeKelas
    const result = await Perkuliahan.findAll({
      where: {
        kode_kelas: parsedKodeKelas
      },
      order: [['id', 'ASC']]
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
