import Pengajar from '@proyek3/postgres-database/models/Pengajar'
import sequelize from '@proyek3/postgres-database/db'

export const getPengajarByNipDosen = async (nip) => {
  try {
    const resultPengajar = await Pengajar.findOne({
      where: {
        nip: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('nip')),
          'LIKE',
          '%' + nip.toLowerCase() + '%'
        )
      }
    })
    return resultPengajar
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getPengajarByKMTA = async (kodeMatkul, tahunAkademik) => {
  try {
    const lowerKodeMatkul = kodeMatkul.toLowerCase()
    const parsedTahunAkademik = parseInt(tahunAkademik)
    const result = await sequelize.query(
      'SELECT "Pengajar".nip, "Pengajar".id_perkuliahan, "Pengajar"."createdAt", "Pengajar"."updatedAt", "Perkuliahan".tahun_akademik, "Perkuliahan".id_mata_kuliah, "Perkuliahan".kode_kelas, "Perkuliahan"."createdAt", "Perkuliahan"."updatedAt" FROM "Pengajar" LEFT JOIN "Perkuliahan" ON "Pengajar".id_perkuliahan = "Perkuliahan".id WHERE "Perkuliahan".tahun_akademik = ? AND LOWER("Perkuliahan".id_mata_kuliah) = ?',
      {
        replacements: [parsedTahunAkademik, lowerKodeMatkul],
        type: sequelize.QueryTypes.SELECT
      }
    )
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
