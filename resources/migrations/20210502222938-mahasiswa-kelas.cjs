'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mahasiswa', {
      nim: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nama: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false
      },
      nomor_ponsel:{
          type: Sequelize.STRING(13),
          allowNull: true
      },
      url_foto:{
          type: Sequelize.STRING,
          allowNull: false
      }
    });
    await queryInterface.createTable('Kelas', {
      kode_kelas: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
      },
      tahun:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
  });  

},
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Kelas');
    await queryInterface.dropTable('Mahasiswa');
  }
};