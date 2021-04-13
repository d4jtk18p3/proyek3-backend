'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jadwal', {
      id_jadwal: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_kelas: {
        type: Sequelize.INTEGER
      },
      waktu_mulai: {
        type: Sequelize.DATE
      },
      waktu_selesai: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('Nilai', {
      NIM: {
        type: Sequelize.INTEGER
      },
      id_mata_kuliah: {
        type: Sequelize.INTEGER
      },
      nilai_semester: {
        type: Sequelize.STRING(2)
      }
    });
    await queryInterface.createTable('Presensi', {
      id_mahasiswa: {
        type: Sequelize.INTEGER
      },
      id_kelas: {
        type: Sequelize.INTEGER
      },
      id_jadwal: {
        type: Sequelize.INTEGER
      },
      tipe_presensi: {
        type: Sequelize.STRING(10)
      }
    });
    await queryInterface.createTable('Prodi', {
      kode_prodi: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jadwal');
    await queryInterface.dropTable('Nilai');
    await queryInterface.dropTable('Presensi');
    await queryInterface.dropTable('Prodi');
  }
};
