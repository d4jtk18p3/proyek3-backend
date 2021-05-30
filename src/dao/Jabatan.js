import Jabatan from '@proyek3/postgres-database/models/Jabatan'
// import sequelize from '@proyek3/postgres-database/db'

export const newJabatan = async (id) => {
  try {
    const result = await Jabatan.create({
      id: id
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getJabatanById = async (id) => {
  try {
    const result = await Jabatan.findOne({
      where: {
        id: id
      }
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
