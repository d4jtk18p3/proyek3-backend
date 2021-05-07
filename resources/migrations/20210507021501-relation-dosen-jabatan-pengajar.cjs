'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Pengajar', 
      'id_perkuliahan',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Perkuliahan',
          key: 'id_perkuliahan'
        },
    });
    await queryInterface.addColumn(
      'Pengajar', 
      'nip',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Dosen',
          key: 'nip'
        },
    });
    await queryInterface.addColumn(
      'Dosen', 
      'id_jabatan',{
        type: Sequelize.STRING,
        allowNull: false,
        reference: {
          model: 'Jabatan',
          key: 'id_jabatan'
        },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Dosen', 'id_jabatan');
    await queryInterface.removeColumn('Pengajar', 'nip');
    await queryInterface.removeColumn('Pengajar', 'id_perkuliahan');
  }
};
