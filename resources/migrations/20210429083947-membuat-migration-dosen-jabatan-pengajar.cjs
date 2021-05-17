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
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    await queryInterface.createTable('Jabatan', {
      id_jabatan: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    await queryInterface.createTable('Pengajar', {
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pengajar');
    await queryInterface.dropTable('Jabatan');
    await queryInterface.dropTable('Dosen');
  }
};
