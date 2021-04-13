'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Jadwal', {
      fields: ['id_kelas'],
      type: 'foreign key',
      name: 'c_unique0_jadwal',
      references: {
        table: 'Kelas',
        field: 'id_kelas'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Presensi', {
      fields: ['id_kelas'],
      type: 'unique',
      name: 'c_unique0_presensi',
      references: {
        table: 'Jadwal',
        field: 'id_kelas'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Presensi', {
      fields: ['id_jadwal'],
      type: 'foreign key',
      name: 'c_unique1_presensi',
      references: {
        table: 'Jadwal',
        field: 'id_jadwal'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Presensi', {
      fields: ['id_mahasiswa'],
      type: 'unique',
      name: 'c_unique2_presensi',
      references: {
        table: 'Kuliah_Mahasiswa',
        field: 'id_mahasiswa'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Nilai', {
      fields: ['NIM'],
      type: 'unique',
      name: 'c_unique0_nilai',
      references: {
        table: 'Mahasiswa',
        field: 'NIM'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Nilai', {
      fields: ['id_mata_kuliah'],
      type: 'foreign key',
      name: 'c_unique1_nilai',
      references: {
        table: 'MataKuliah',
        field: 'id_mata_kuliah'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Nilai', 'c_unique1_nilai');
    await queryInterface.removeConstraint('Nilai', 'c_unique0_nilai');
    await queryInterface.removeConstraint('Presensi', 'c_unique2_presensi');
    await queryInterface.removeConstraint('Presensi', 'c_unique1_presensi');
    await queryInterface.removeConstraint('Presensi', 'c_unique0_presensi');
    await queryInterface.removeConstraint('Jadwal', 'c_unique0_jadwal');
  }
};
