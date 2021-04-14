const Dosen = require('./models/Dosen')
const Prodi = require('./models/prodi')
const TataUsaha = require('./models/TataUsaha')
const Akun = require('./models/Akun')
const Kuliah = require('./models/Kuliah')
const Kelas = require('./models/Kelas')
const Presensi = require('./models/presensi')
const setAssociations = () => {
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
        foreignKey: 'NIP'
    })
}

module.exports = setAssociations
