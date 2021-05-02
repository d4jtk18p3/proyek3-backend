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
      kode_kelas: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Kelas',
            key: 'kode_kelas',
          },
          unique: true  
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
          primaryKey: true,
          autoIncrement: true
      },
      kode_program_studi: {
        type: Sequelize.STRING(15),
        references: {
          model: 'Program_studi',
          key: 'kode_program_studi',
        },
        allowNull: false,
        unique: true
      },
      nip: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dosen', 
          key: 'nip', 
        }
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