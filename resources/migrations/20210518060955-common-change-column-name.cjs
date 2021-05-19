'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Perkuliahan', 'id_perkuliahan', 'id')
    await queryInterface.renameColumn('Jabatan', 'id_jabatan', 'id')
    await queryInterface.renameColumn('Mata_Kuliah', 'id_mata_kuliah', 'id')
    await queryInterface.changeColumn('Studi','id_perkuliahan', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Perkuliahan',
        key: 'id'
      }
    })
    await queryInterface.changeColumn('Studi','id_mahasiswa', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Mahasiswa',
        key: 'nim'
      }
    })
    await queryInterface.changeColumn('Pengajar','id_perkuliahan', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Perkuliahan',
        key: 'id'
      }
    })
    await queryInterface.changeColumn('Dosen','id_jabatan', {
      type: Sequelize.STRING,
      allowNull: false,
      reference: {
        model: 'Jabatan',
        key: 'id'
      }
    })
    await queryInterface.changeColumn('Perkuliahan','id_mata_kuliah', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Mata_Kuliah',
        key: 'id'
      }
    })
    await queryInterface.createTable('Tata_Usaha', {
      nip: {
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true
      },
      nama_staff: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Perkuliahan', 'id', 'id_perkuliahan')
    await queryInterface.renameColumn('Jabatan', 'id', 'id_jabatan')
    await queryInterface.renameColumn('Mata_Kuliah', 'id', 'id_mata_kuliah')
    await queryInterface.changeColumn('Studi','id_perkuliahan', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Perkuliahan',
        key: 'id_perkuliahan'
      }
    })
    await queryInterface.changeColumn('Studi','id_mahasiswa', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Mahasiswa',
        key: 'id_mahasiswa'
      }
    })
    await queryInterface.changeColumn('Pengajar','id_perkuliahan', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Perkuliahan',
        key: 'id_perkuliahan'
      }
    })
    await queryInterface.changeColumn('Dosen','id_jabatan', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Jabatan',
        key: 'id_jabatan'
      }
    })
    await queryInterface.changeColumn('Perkuliahan','id_mata_kuliah', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Mata_Kuliah',
        key: 'id_mata_kuliah'
      }
    })
    await queryInterface.dropTable('Tata_Usaha')
  }
};
