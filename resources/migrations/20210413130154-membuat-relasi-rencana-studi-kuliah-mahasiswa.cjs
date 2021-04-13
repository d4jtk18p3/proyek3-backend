'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Rencana_Studi',
      'id_mahasiswa',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mahasiswa', 
          key: 'id_mahasiswa', 
        },
      }
    );
    await queryInterface.addColumn(
      'Rencana_Studi',
      'id_kuliah',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kuliah', 
          key: 'id_kuliah', 
        },
      }
    );
    await queryInterface.addColumn(
      'Kuliah_Mahasiswa',
      'id_mahasiswa',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rencana_Studi', 
          key: 'id_mahasiswa', 
        },
      }
    );
    await queryInterface.addColumn(
      'Kuliah_Mahasiswa',
      'id_kuliah',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rencana_Studi', 
          key: 'id_kuliah', 
        },
      }
    );
    await queryInterface.addColumn(
      'Kuliah_Mahasiswa',
      'id_kelas',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kelas', 
          key: 'id_kelas', 
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Kuliah_Mahasiswa', 'id_kelas');
    await queryInterface.removeColumn('Kuliah_Mahasiswa', 'id_kuliah');
    await queryInterface.removeColumn('Kuliah_Mahasiswa', 'id_mahasiswa');
    await queryInterface.removeColumn('Rencana_Studi', 'id_kuliah');
    await queryInterface.removeColumn('Rencana_Studi', 'id_mahasiswa');
  }
};
