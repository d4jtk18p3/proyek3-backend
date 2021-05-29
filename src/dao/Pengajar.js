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
