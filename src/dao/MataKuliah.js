import mataKuliah from '@proyek3/postgres-database/models/Mata_Kuliah'
// import sequelize from '@proyek3/postgres-database/db'

export const newMataKuliah = async (
  id,
  semester,
  namaMatkul,
  sksTeori,
  sksPraktek,
  kodeProdi
) => {
  try {
    const result = await mataKuliah.create({
      id,
      semester,
      nama_mata_kuliah: namaMatkul,
      sks_teori: sksTeori,
      sks_praktek: sksPraktek,
      kode_program_studi: kodeProdi
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getAllMataKuliah = async () => {
  try {
    const result = await mataKuliah.findAll({
      order: [['id', 'ASC']]
    })
    if (result instanceof Error) throw result
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getMataKuliahById = async (id) => {
  try {
    const result = await mataKuliah.findOne({
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
