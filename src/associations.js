const MataKuliah = require("./models/Mata_Kuliah");
const Program_Studi = require("./models/Program_Studi");

const setAssociations = () => {
    Program_Studi.hasMany(MataKuliah, {
        foreignKey: 'kode_program_studi'
    });
}
