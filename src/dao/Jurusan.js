import Jurusan from '@proyek3/postgres-database/models/Jurusan'
// import sequelize from '@proyek3/postgres-database/db'

export const newJurusan = async (kodeJurusan, nip) => {
  try {
    const result = await Jurusan.create({
      kode_jurusan: kodeJurusan,
      nip: nip
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getAllJurusan = async () => {
  try {
    const result = await Jurusan.findAll()
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getJurusanByKodeJurusan = async (kodeJurusan) => {
  try {
    const result = await Jurusan.findOne({
      where: {
        kode_jurusan: kodeJurusan
      }
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getKajurByKodeJurusan = async (kodeJurusan) => {
  try {
    const result = await Jurusan.findOne({
      where: {
        kode_jurusan: kodeJurusan
      }
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
