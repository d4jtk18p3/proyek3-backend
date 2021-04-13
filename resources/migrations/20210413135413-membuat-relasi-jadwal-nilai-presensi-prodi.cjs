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
        unique: true
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
        unique: true
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
        unique: true
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
        unique: true
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
        unique: true
      }
    );
    await queryInterface.addColumn(
      'Nilai',
      'id_mata_kuliah',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'MataKuliah', 
          key: 'id_mata_kuliah', 
        },
        unique: true
      }
    );
    await queryInterface.addConstraint('Presensi', {
      fields: ['id_mahasiswa', 'id_kelas'],
      type: 'unique',
      name: 'c_unique0_presensi'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Presensi','c_unique0_presensi');
    await queryInterface.removeColumn('Nilai', 'id_mata_kuliah');
    await queryInterface.removeColumn('Nilai', 'NIM');
    await queryInterface.removeColumn('Presensi', 'id_mahasiswa');
    await queryInterface.removeColumn('Presensi', 'id_jadwal');
    await queryInterface.removeColumn('Presensi', 'id_kelas');
    await queryInterface.removeColumn('Jadwal', 'id_kelas');
  }
};
