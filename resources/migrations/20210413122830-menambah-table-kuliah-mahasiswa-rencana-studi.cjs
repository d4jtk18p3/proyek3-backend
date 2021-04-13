'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Kuliah_Mahasiswa', {
      kuliah_mahasiswa_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_mahasiswa: {
        type: Sequelize.INTEGER
      },
      id_kuliah: {
        type: Sequelize.INTEGER
      },
      id_kelas: {
        type: Sequelize.INTEGER
      }
    });
    await queryInterface.createTable('Rencana_Studi',{
      id_mahasiswa: {
        type: Sequelize.INTEGER
      },
      id_kuliah: {
        type: Sequelize.INTEGER
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Kuliah_Mahasiswa');
    await queryInterface.dropTable('Rencana_Studi');
  }
};
