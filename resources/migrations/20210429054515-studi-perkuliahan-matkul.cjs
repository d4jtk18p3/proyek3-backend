'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mata_Kuliah', {
      id_mata_kuliah: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      semester: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nama_mata_kuliah: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true  
      },
      sks_teori: {
          type: Sequelize.INTEGER,
          allowNull: true
      },
      sks_praktek:{
          type: Sequelize.INTEGER,
          allowNull: true
      }
    });
    await queryInterface.createTable('Perkuliahan', {
      id_perkuliahan: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      tahun_akademik: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_mata_kuliah: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mata_Kuliah', 
          key: 'id_mata_kuliah', 
        },
        unique: true
      },
  });
  await queryInterface.createTable('Studi', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_perkuliahan: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Perkuliahan',
        key: 'id_perkuliahan'
      },
      unique: true
    },
  });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('studi');
    await queryInterface.dropTable('perkuliahan');
    await queryInterface.dropTable('Mata_Kuliah');
  }
};
