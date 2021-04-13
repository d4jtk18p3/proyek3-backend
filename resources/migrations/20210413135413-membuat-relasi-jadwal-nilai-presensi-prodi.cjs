'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Jadwal',
      'id_kelas',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kelas', 
          key: 'id_kelas', 
        },
      }
    );
    await queryInterface.addColumn(
      'Presensi',
      'id_kelas',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jadwal', 
          key: 'id_kelas', 
        },
      }
    );
    await queryInterface.addColumn(
      'Presensi',
      'id_jadwal',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jadwal', 
          key: 'id_jadwal', 
        },
      }
    );
    await queryInterface.addColumn(
      'Presensi',
      'id_mahasiswa',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kuliah_Mahasiswa', 
          key: 'id_mahasiswa', 
        },
      }
    );
    await queryInterface.addColumn(
      'Nilai',
      'NIM',
      {
        type: Sequelize.STRING(9),
        references: {
          model: 'Mahasiswa', 
          key: 'NIM', 
        },
      }
    );
    await queryInterface.addColumn(
      'Nilai',
      'id_mata_kuliah',
      {
        type: Sequelize.STRING(8),
        references: {
          model: 'MataKuliah', 
          key: 'id_mata_kuliah', 
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Nilai', 'id_mata_kuliah');
    await queryInterface.removeColumn('Nilai', 'NIM');
    await queryInterface.removeColumn('Presensi', 'id_mahasiswa');
    await queryInterface.removeColumn('Presensi', 'id_jadwal');
    await queryInterface.removeColumn('Presensi', 'id_kelas');
    await queryInterface.removeColumn('Jadwal', 'id_kelas');
  }
};
