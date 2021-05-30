import Kelas from '@proyek3/postgres-database/models/Kelas'
// import sequelize from '@proyek3/postgres-database/db'

export const newKelas = async (kodeKelas, kodeProdi, nip, tahun) => {
  try {
    const result = await Kelas.create({
      kode_kelas: kodeKelas,
      kode_program_studi: kodeProdi,
      nip: parseInt(nip),
      tahun: parseInt(tahun)
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getAllKelas = async () => {
  try {
    const result = await Kelas.findAll()
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getWaliDosen = async (kodeKelas) => {
  try {
    const result = await Kelas.findOne({
      where: {
        kode_kelas: kodeKelas
      }
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
