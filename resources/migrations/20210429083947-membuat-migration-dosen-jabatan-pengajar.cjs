'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dosen', {
      nip: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nama_dosen: {
        type: Sequelize.STRING(30)
      }
    });
    await queryInterface.createTable('Jabatan', {
      id_jabatan: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      }
    });
    await queryInterface.createTable('Pengajar', {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pengajar');
    await queryInterface.dropTable('Jabatan');
    await queryInterface.dropTable('Dosen');
  }
};
