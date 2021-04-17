'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'Dosen',
        'username',
        {
            type: Sequelize.STRING,
            reference: {
              model: 'Akun',
              key: 'username',
            },
        }
    )
    await queryInterface.addColumn(
        'Mahasiswa',
        'username',
        {
            type: Sequelize.STRING,
            reference: {
              model: 'Akun',
              key: 'username',
            }
        }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Mahasiswa', 'username')
    await queryInterface.removeColumn('Dosen', 'username')
  }
};
