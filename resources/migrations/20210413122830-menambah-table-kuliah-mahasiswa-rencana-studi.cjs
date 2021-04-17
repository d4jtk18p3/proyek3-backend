'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('KuliahMahasiswa', {
      kuliah_mahasiswa_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('RencanaStudi',{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('KuliahMahasiswa');
    await queryInterface.dropTable('RencanaStudi');
  }
};
