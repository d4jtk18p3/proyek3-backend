const Jadwal = require("./models/jadwal")
const Presensi = require("./models/presensi")
const MataKuliah = require("./models/MataKuliah")
const Kuliah = require("./models/Kuliah")
const Kelas = require("./models/Kelas")
const KuliahMahasiswa = require("./models/kuliah_mahasiswa")
const Mahasiswa = require("./models/Mahasiswa")
const Dosen = require("./models/Dosen")
const RencanaStudi = require("./models/rencana_studi")
const Nilai = require("./models/nilai")
const Prodi = require("./models/prodi")
const TataUsaha = require("./models/TataUsaha")
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
}

module.exports = setAssociations
