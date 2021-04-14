'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Kuliah', 
      'id_mata_kuliah', 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'MataKuliah', 
          key: 'id_mata_kuliah', 
        },
      }
    )

    await queryInterface.addConstraint('Kuliah', {
        fields: ['id_mata_kuliah', 'tahun_akademik'],
        type: 'unique',
        name: 'c_unique0_kuliah'
    })

    await queryInterface.addColumn(
      'Kelas', 
      'kode_prodi', 
      {
        type: Sequelize.STRING(15),
        references: {
          model: 'Prodi', 
          key: 'kode_prodi', 
        },
      }
    );
    await queryInterface.addColumn(
      'Kelas', 
      'id_kuliah', 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kuliah', 
          key: 'id_kuliah',
        },
      }
    )
    await queryInterface.addConstraint('Kelas', {
        fields: ['id_kuliah', 'id_kelas'],
        type: 'unique',
        name: 'c_unique1_kelas'
    });

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('Kuliah','id_mata_kuliah')
     await queryInterface.removeConstraint('Kuliah', 'c_unique0_kuliah')
     
     await queryInterface.removeColumn('Kelas','id_kuliah')
     await queryInterface.removeConstraint('Kelas', 'c_unique1_kelas')
     await queryInterface.removeColumn('Kelas','kode_prodi') 
  }
};
