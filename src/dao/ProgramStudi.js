import Prodi from '@proyek3/postgres-database/models/Program_Studi'
// import sequelize from '@proyek3/postgres-database/db'

export const newProdi = async (kodeProdi, nip, kodeJurusan) => {
  try {
    const result = await Prodi.create({
      kode_program_studi: kodeProdi,
      nip: nip,
      kode_jurusan: kodeJurusan
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getAllProdi = async () => {
  try {
    const result = await Prodi.findAll()
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getKaProd = async (kodeProdi) => {
  try {
    const result = await Prodi.findOne({
      where: {
        kode_program_studi: kodeProdi
      }
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateKaProd = async (kodeProdi, nip) => {
  try {
    const result = await Prodi.update(
      {
        nip: nip
      },
      {
        where: {
          kode_program_studi: kodeProdi
        }
      }
    )
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
