'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Menjabat', {
        jabatan: {
        type: Sequelize.STRING(16)
        },
        periode: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    await queryInterface.createTable('Ormawa', {
        id_ormawa: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
        nama_ormawa: {
        type: Sequelize.STRING(30)
        },
        url_logo_ormawa: {
            type: Sequelize.STRING(30)
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
        await queryInterface.createTable('Mewalikan', {
        tahun_mulai: {
            type: Sequelize.STRING(4)
        },
        tahun_berakhir: {
            type: Sequelize.STRING(4)
        },
        status_aktif: {
            type: Sequelize.BOOLEAN
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
        await queryInterface.createTable('Memimpin', {
        tahun_mulai: {
            type: Sequelize.STRING(4)
        },
        tahun_berakhir: {
            type: Sequelize.STRING(4)
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
        await queryInterface.dropTable('Menjabat');
        await queryInterface.dropTable('Ormawa');
        await queryInterface.dropTable('Mewalikan');
        await queryInterface.dropTable('Memimpin');
  }
};