'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Rencana_Studi', {
      fields: ['id_mahasiswa'],
      type: 'foreign key',
      name: 'c_unique0_rencana_studi',
      references: {
        table: 'Mahasiswa',
        field: 'id_mahasiswa'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Rencana_Studi', {
      fields: ['id_kuliah'],
      type: 'foreign key',
      name: 'c_unique1_rencana_studi',
      references: {
        table: 'Kuliah',
        field: 'id_kuliah'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    
    await queryInterface.addConstraint('Kuliah_Mahasiswa', {
      fields: ['id_mahasiswa'],
      type: 'unique',
      name: 'c_unique0_kuliah_mahasiswa',
      references: {
        table: 'Rencana_Studi',
        field: 'id_mahasiswa'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Kuliah_Mahasiswa', {
      fields: ['id_kuliah'],
      type: 'unique',
      name: 'c_unique1_kuliah_mahasiswa',
      references: {
        table: 'Rencana_Studi',
        field: 'id_kuliah'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Kuliah_Mahasiswa', {
      fields: ['id_kelas'],
      type: 'foreign key',
      name: 'c_unique2_kuliah_mahasiswa',
      references: {
        table: 'Kelas',
        field: 'id_kelas'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Kuliah_Mahasiswa', 'c_unique2_kuliah_mahasiswa');
    await queryInterface.removeConstraint('Kuliah_Mahasiswa', 'c_unique1_kuliah_mahasiswa');
    await queryInterface.removeConstraint('Kuliah_Mahasiswa', 'c_unique0_kuliah_mahasiswa');
    await queryInterface.removeConstraint('Rencana_Studi', 'c_unique1_rencana_studi');
    await queryInterface.removeConstraint('Rencana_Studi', 'c_unique0_rencana_studi');
  }
};
