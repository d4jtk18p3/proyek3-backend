const Jadwal = require('./models/jadwal')
const Presensi = require('./models/presensi')
const MataKuliah = require('./models/MataKuliah')
const Kuliah = require('./models/Kuliah')
const Kelas = require('./models/Kelas')
const KuliahMahasiswa = require('./models/kuliah_mahasiswa')
const Mahasiswa = require('./models/Mahasiswa')
const Dosen = require('./models/Dosen')
const RencanaStudi = require('./models/rencana_studi')
const Nilai = require('./models/nilai')
const Prodi = require('./models/prodi')
const TataUsaha = require('./models/TataUsaha')
const Akun = require('./models/Akun')
const OrganisasiMahasiswa = require('./models/OrganisasiMahasiswa')
const Menjabat = require('./models/Menjabat')
const Jurusan = require('./models/Jurusan')

const setAssociations = () => {
  Kuliah.belongsToMany(Mahasiswa, {
    through: 'RencanaStudi'
  })
  Kuliah.hasMany(Kelas, {
    foreignKey: 'id_kuliah'
  })
  Kuliah.belongsToMany(Dosen, {
    through: 'Mengajar'
  })
  MataKuliah.hasMany(Kuliah, {
    foreignKey: 'id_mata_kuliah'
  })
  MataKuliah.hasMany(Nilai, {
    foreignKey: 'id_mata_kuliah'
  })
  Kelas.hasMany(Jadwal, {
    foreignKey: 'id_kelas'
  })
  Kelas.belongsToMany(Dosen, {
    through: 'Mewalikan'
  })
  Kelas.belongsTo(Prodi, {
    foreignKey: 'kode_prodi'
  })
  KuliahMahasiswa.hasMany(Presensi, {
    foreignKey: 'kuliah_mahasiswa_id'
  })
  RencanaStudi.belongsToMany(Kelas, {
    through: 'KuliahMahasiswa'
  })
  Jadwal.hasMany(Presensi, {
    foreignKey: 'id_jadwal'
  })
  Presensi.belongsTo(TataUsaha, {
    foreignKey: 'nip'
  })
  Mahasiswa.hasMany(Nilai, {
    foreignKey: 'NIM'
  })
  Dosen.belongsTo(Akun, {
    foreignKey: 'username'
  })
  Mahasiswa.belongsTo(Akun, {
    foreignKey: 'username'
  })
  Mahasiswa.hasMany(RencanaStudi, {
    foreignKey: 'id_mahasiswa'
  })
  TataUsaha.belongTo(Akun, {
    foreignKey: 'username'
  })
  OrganisasiMahasiswa.hasMany(Menjabat, {
    foreignKey: 'id_ormawa'
  })
  Menjabat.hasMany(Mahasiswa, {
    foreignKey: 'NIM'
  })
  RencanaStudi.hasMany(KuliahMahasiswa, {
    foreignKey: ['id_mahasiswa', 'id_kuliah']
  })
  Dosen.hasOne(Akun, {
    foreignKey: 'username'
  })
  Dosen.belongsToMany(Prodi, {
    through: 'Memimpin'
  })
  Dosen.belongsToMany(Kuliah, {
    through: 'Mengajar'
  })
  Prodi.hasMany(Kelas, {
    foreignKey: 'kode_prodi'
  })
  TataUsaha.hasOne(Akun, {
    foreignKey: 'username'
  })
  TataUsaha.hasMany(Presensi, {
    foreignKey: 'nip'
  })
  Jurusan.hasMany(Prodi, {
    foreignKey: 'kode_prodi'
  })
}

module.exports = setAssociations
