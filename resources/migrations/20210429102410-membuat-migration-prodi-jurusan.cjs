'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Program_Studi', {
      kode_prodi: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      }
    });
    await queryInterface.createTable('Jurusan', {
      kode_jurusan: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jurusan');
    await queryInterface.dropTable('Program_Studi');
  }
};
