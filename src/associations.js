const mataKuliah = require('@proyek3/postgres-database/models/Mata_Kuliah')
const programStudi = require('@proyek3/postgres-database/models/Program_Studi')
const mahasiswa = require('@proyek3/postgres-database/models/Mahasiswa')
const kelas = require('@proyek3/postgres-database/models/Kelas')
const perkuliahan = require('@proyek3/postgres-database/models/Perkuliahan')
const dosen = require('@proyek3/postgres-database/models/Dosen')
const jabatan = require('@proyek3/postgres-database/models/Jabatan')
const jurusan = require('@proyek3/postgres-database/models/Jurusan')
const studi = require('./models/Studi')

const setAssociations = () => {
  programStudi.hasMany(mataKuliah, {
    foreignKey: 'kode_program_studi'
  })
  mahasiswa.belongsToMany(perkuliahan, {
    through: 'Studi'
  })
  kelas.hasMany(mahasiswa, {
    foreignKey: 'kode_kelas'
  })
  kelas.hasMany(perkuliahan, {
    foreignKey: 'kode_kelas'
  })
  mataKuliah.hasMany(perkuliahan, {
    foreignKey: 'id'
  })
  perkuliahan.hasMany(studi, {
    foreignKey: 'id'
  })
  mahasiswa.hasMany(studi, {
    foreignKey: 'id'
  })
  dosen.belongsToMany(perkuliahan, {
    through: 'Pengajar'
  })
  perkuliahan.belongsToMany(dosen, {
    through: 'Pengajar'
  })
  dosen.hasOne(kelas, {
    foreignKey: 'nip'
  })
  dosen.hasMany(programStudi, {
    foreignKey: 'nip'
  })
  dosen.hasMany(jurusan, {
    foreignKey: 'nip'
  })
  jabatan.hasOne(dosen, {
    foreignKey: 'id_jabatan'
  })
  programStudi.hasMany(mataKuliah, {
    foreignKey: 'kode_program_studi'
  })
  programStudi.hasMany(kelas, {
    foreignKey: 'kode_program_studi'
  })
  jurusan.hasMany(programStudi, {
    foreignKey: 'kode_jurusan'
  })
}

module.exports = setAssociations
