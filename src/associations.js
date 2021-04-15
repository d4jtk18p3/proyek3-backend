const Dosen = require('./models/Dosen');
const Mengajar = require('./models/Mengajar');
const Memimpin = require('./models/Memimpin');
const Mewalikan = require('./models/Mewalikan');
const Prodi = require('./models/prodi');
const TataUsaha = require('./models/TataUsaha');

const setAssociations = () => {
    Dosen.hasOne(Akun, {
        foreignKey: 'username'
    });
    Dosen.belongsToMany(Prodi, {
        through: 'Memimpin'
    });
    Dosen.belongsToMany(Kuliah, {
        through: 'Mengajar'
    });

    Prodi.hasMany(Kelas, {
        foreignKey: 'kode_prodi'
    });

    TataUsaha.hasOne(Akun, {
        foreignKey: 'username'
    });
    TataUsaha.hasMany(Presensi,{
        foreignKey: 'NIP'
    });
};

module.exports = setAssociations;
