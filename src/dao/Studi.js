import Studi from '@proyek3/postgres-database/models/Studi'
// import sequelize from '@proyek3/postgres-database/db'

export const getStudiByID = async (id) => {
  try {
    const result = await Studi.findOne({
      where: {
        id: parseInt(id)
      }
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
