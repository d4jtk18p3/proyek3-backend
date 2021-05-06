'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Mahasiswa', 
      'kode_kelas',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Kelas',
          key: 'kode_kelas'
        },
    })
    await queryInterface.addColumn(
      'Kelas', 
      'kode_program_studi',{
        type: Sequelize.STRING(15),
        allowNull: false,
        reference: {
          model: 'Program_Studi',
          key: 'kode_program_studi'
        }
    }) 
    await queryInterface.addColumn(
      'Kelas', 
      'nip',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Dosen',
          key: 'nip'
        }
    })
  }, 

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Kelas', 'nip')
    await queryInterface.removeColumn('Kelas', 'kode_program_studi')
    await queryInterface.removeColumn('Mahasiswa', 'kode_kelas')
  }
};
