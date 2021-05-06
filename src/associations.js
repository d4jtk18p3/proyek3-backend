const mataKuliah = require('./models/Mata_Kuliah')
const programStudi = require('./models/Program_Studi')

const setAssociations = () => {
  programStudi.hasMany(mataKuliah, {
    foreignKey: 'kode_program_studi'
  })
}

module.exports = setAssociations
