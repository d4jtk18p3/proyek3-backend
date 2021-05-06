'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Mata_Kuliah', 
      'kode_program_studi',{
        type: Sequelize.STRING,
        allowNull: false,
        reference: {
          model: 'Program_Studi',
          key: 'kode_program_studi'
        }
    }) 
    await queryInterface.addColumn(
      'Perkuliahan', 
      'kode_kelas',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Kelas',
          key: 'kode_kelas'
        }
    })
    await queryInterface.addColumn(
      'Studi', 
      'id_mahasiswa',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Mahasiswa',
          key: 'id_mahasiswa'
        }
    })  
    await queryInterface.addConstraint('Studi',{
      fields: ['id_perkuliahan', 'id_mahasiswa'],
      type: 'Unique',
      name: 'c_unique0_studi'
    })
    await queryInterface.addConstraint('Perkuliahan',{
      fields: ['id_mata_kuliah', 'kode_kelas'],
      type: 'Unique',
      name: 'c_unique0_perkuliahan'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Perkuliahan', 'c_unique0_perkuliahan')
    await queryInterface.removeConstraint('Studi', 'c_unique0_studi')
    await queryInterface.removeColumn('Studi', 'id_mahasiswa')
    await queryInterface.removeColumn('Perkuliahan', 'kode_kelas')
    await queryInterface.removeColumn('Mata_Kuliah', 'kode_program_studi')
  }
};
