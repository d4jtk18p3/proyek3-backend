const mataKuliah = require('./models/Mata_Kuliah')
const programStudi = require('./models/Program_Studi')
const mahasiswa = require('./models/Mahasiswa')
const kelas = require('./models/Kelas')

const setAssociations = () => {
  programStudi.hasMany(mataKuliah, {
    foreignKey: 'kode_program_studi'
  }),
  mahasiswa.belongsToMany(perkuliahan, {
    through: 'Studi'
  }),
  kelas.hasMany(mahasiswa, {
    foreignKey: 'kode_kelas'
  }),
  kelas.hasMany(perkuliahan, {
    foreignKey: 'kode_kelas'
  })
}

module.exports = setAssociations
