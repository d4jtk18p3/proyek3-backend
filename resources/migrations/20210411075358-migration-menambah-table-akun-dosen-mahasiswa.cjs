'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Akun', {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tipe_akun: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
      });
      await queryInterface.createTable('Dosen', {
        NIP: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nama_dosen: {
            type: Sequelize.STRING,
            allowNull: false
        },
        jabatan: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
      });
      await queryInterface.createTable('Mahasiswa', {
        id_mahasiswa: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        NIM: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        nama_mahasiswa: {
            type: Sequelize.STRING,
            allowNull: false
        },
        angaktan: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        tingkat: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING
        },
        nomor_hp: {
            type: Sequelize.STRING
        },
        url_foto: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Akun');
    await queryInterface.dropTable('Dosen');
    await queryInterface.dropTable('Mahasiswa');
  }
};
