'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jabatan', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
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
      updatedAt: Sequelize.DATE
    })
    await queryInterface.createTable('Dosen', {
      nip: {
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true
      },
      nama_dosen: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      id_jabatan: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'Jabatan',
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })

    await queryInterface.createTable('Jurusan', {
      kode_jurusan: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      nip: {
        type: Sequelize.STRING(30),
        allowNull: false,
        references: {
          model: 'Dosen',
          key: 'nip'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
    await queryInterface.createTable('Program_Studi', {
      kode_program_studi: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true
      },
      nip: {
        type: Sequelize.STRING(30),
        allowNull: false,
        references: {
          model: 'Dosen',
          key: 'nip'
        },
      },
      kode_jurusan: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Jurusan',
          key: 'kode_jurusan'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
    await queryInterface.createTable('Mata_Kuliah', {
      id: {
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
      sks_praktek: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      kode_program_studi: {
        type: Sequelize.STRING(15),
        allowNull: false,
        references: {
          model: 'Program_Studi',
          key: 'kode_program_studi'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
    await queryInterface.createTable('Kelas', {
      kode_kelas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      tahun: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      kode_program_studi: {
        type: Sequelize.STRING(15),
        allowNull: false,
        references: {
          model: 'Program_Studi',
          key: 'kode_program_studi'
        }
      },
      nip: {
        type: Sequelize.STRING(30),
        allowNull: false,
        references: {
          model: 'Dosen',
          key: 'nip'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
    await queryInterface.createTable('Perkuliahan', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tahun_akademik: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_mata_kuliah: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mata_Kuliah',
          key: 'id'
        },
      },
      kode_kelas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Kelas',
          key: 'kode_kelas'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })

    await queryInterface.createTable('Mahasiswa', {
      nim: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true
      },
      nama: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nomor_ponsel: {
        type: Sequelize.STRING(13),
        allowNull: true
      },
      url_foto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      kode_kelas: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Kelas',
          key: 'kode_kelas'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })

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
          key: 'id'
        },
      },
      id_mahasiswa: {
        type: Sequelize.STRING(15),
        allowNull: false,
        references: {
          model: 'Mahasiswa',
          key: 'nim'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })

    await queryInterface.createTable('Pengajar', {
      nip: {
        type: Sequelize.STRING(30),
        allowNull: false,
        references: {
          model: 'Dosen',
          key: 'nip'
        }
      },
      id_perkuliahan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Perkuliahan',
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })

    await queryInterface.addConstraint('Studi', {
      fields: ['id_perkuliahan', 'id_mahasiswa'],
      type: 'Unique',
      name: 'c_unique0_studi'
    })
    await queryInterface.addConstraint('Perkuliahan', {
      fields: ['id_mata_kuliah', 'kode_kelas'],
      type: 'Unique',
      name: 'c_unique0_perkuliahan'
    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Perkuliahan', 'c_unique0_perkuliahan')
    await queryInterface.removeConstraint('Studi', 'c_unique0_studi')
    await queryInterface.dropTable('Pengajar')
    await queryInterface.dropTable('Studi')
    await queryInterface.dropTable('Mahasiswa')
    await queryInterface.dropTable('Perkuliahan')
    await queryInterface.dropTable('Kelas')
    await queryInterface.dropTable('Mata_Kuliah')
    await queryInterface.dropTable('Program_Studi')
    await queryInterface.dropTable('Jurusan')
    await queryInterface.dropTable('Dosen')
    await queryInterface.dropTable('Tata_Usaha')
    await queryInterface.dropTable('Jabatan')
  }
}
