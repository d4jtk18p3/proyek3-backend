const Studi = require("./models/Studi");
const Perkuliahan = require("./models/Perkuliahan");
const MataKuliah = require("./models/Mata_Kuliah");
const Kelas = require("./models/Kelas");
const Dosen = require("./models/Dosen");
const Jabatan = require("./models/Jabatan");
const Jurusan = require("./models/Jurusan");
const Mahasiswa = require("./models/Mata_Kuliah");
const Pengajar = require("./models/Pengajar");
const Program_Studi = require("./models/Program_Studi");

const setAssociations = () => {
    Program_Studi.hasMany(MataKuliah, {
        foreignKey: 'kode_program_studi'
    });
}
