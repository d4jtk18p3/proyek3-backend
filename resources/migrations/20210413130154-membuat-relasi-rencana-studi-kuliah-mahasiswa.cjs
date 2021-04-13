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
        unique: true
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
        unique: true
      }
    );
    await queryInterface.addConstraint('Rencana_Studi', {
        fields: ['id_mahasiswa', 'id_kuliah'],
        type: 'unique',
        name: 'c_unique0_rencana_studi'
    });
    await queryInterface.addColumn(
      'Kuliah_Mahasiswa',
      'id_mahasiswa',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rencana_Studi', 
          key: 'id_mahasiswa', 
        },
        unique: true
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
        unique: true
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
        unique: true
      }
    );
    await queryInterface.addConstraint('Kuliah_Mahasiswa', {
      fields: ['id_mahasiswa', 'id_kuliah'],
      type: 'unique',
      name: 'c_unique0_kuliah_mahasiswa'
    });
    await queryInterface.addConstraint('Kuliah_Mahasiswa', {
      fields: ['id_mahasiswa', 'id_kelas'],
      type: 'unique',
      name: 'c_unique1_kuliah_mahasiswa'
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Kuliah_Mahasiswa','c_unique1_kuliah_mahasiswa');
    await queryInterface.removeConstraint('Kuliah_Mahasiswa','c_unique0_kuliah_mahasiswa');
    await queryInterface.removeColumn('Kuliah_Mahasiswa', 'id_kelas');
    await queryInterface.removeColumn('Kuliah_Mahasiswa', 'id_kuliah');
    await queryInterface.removeColumn('Kuliah_Mahasiswa', 'id_mahasiswa');
    await queryInterface.removeConstraint('Rencana_Studi','c_unique0_rencana_studi');
    await queryInterface.removeColumn('Rencana_Studi', 'id_kuliah');
    await queryInterface.removeColumn('Rencana_Studi', 'id_mahasiswa');
  }
};
