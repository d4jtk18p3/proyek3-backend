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
        'id_mahasiswa',
        {
            type: Sequelize.INTEGER,
            reference: {
                model: 'Mahasiswa',
                key: 'id_mahasiswa',
            },
        }
    );

    await queryInterface.addColumn(
        'Memimpin',
        'NIP',
        {
            type: Sequelize.INTEGER,
            reference: {
                model: 'Dosen',
                key: 'NIP',
            },
        }
    );

    await queryInterface.addColumn(
        'Memimpin',
        'kode_prodi',
        {
            type: Sequelize.INTEGER,
            reference: {
                model: 'Prodi',
                key: 'kode_prodi',
            },
        }
    );

    await queryInterface.addColumn(
        'Mewakilkan',
        'NIP',
        {
            type: Sequelize.INTEGER,
            reference: {
                model: 'Dosen',
                key: 'NIP',
            },
        }
    );

    await queryInterface.addColumn(
        'Mewakilkan',
        'id_kelas',
        {
            type: Sequelize.INTEGER,
            reference: {
                model: 'Kelas',
                key: 'id_kelas',
            },
        }
    );
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Menjabat', 'id_ormawa')
    await queryInterface.removeColumn('Menjabat', 'id_mahasiswa')
    await queryInterface.removeColumn('Memimpin', 'NIP')
    await queryInterface.removeColumn('Memimpin', 'kode_prodi')
    await queryInterface.removeColumn('Mewakilkan', 'NIP')
    await queryInterface.removeColumn('Mewakilkan', 'id_kelas')
    }
};