'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Kuliah', { 
      id_kuliah: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      tahun_akademik: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Kuliah');
  }
};
