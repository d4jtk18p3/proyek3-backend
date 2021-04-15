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

    await queryInterface.addColumn(
      'Nilai',
      'NIM',
      {
        type: Sequelize.STRING,
        reference: {
          model: 'Mahasiswa',
          key: 'NIM',
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Dosen', 'username')
    await queryInterface.removeColumn('Mahasiswa', 'username')
    await queryInterface.removeColumn('Nilai', 'NIM')
  }
};
