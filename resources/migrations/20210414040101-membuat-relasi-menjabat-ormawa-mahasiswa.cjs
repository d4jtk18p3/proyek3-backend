'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'Menjabat',
        'id_ormawa',
        {
            type: Sequelize.INTEGER,
            reference: {
                model: 'Ormawa',
                key: 'id_ormawa',
            },

            unique: true
        }
    );

    await queryInterface.addColumn(
        'Menjabat',
        'NIM',
        {
            type: Sequelize.STRING,
            reference: {
                model: 'Mahasiswa',
                key: 'NIM',
            },
        }
    );
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Menjabat', 'id_ormawa')
    await queryInterface.removeColumn('Menjabat', 'NIM')
  }
};