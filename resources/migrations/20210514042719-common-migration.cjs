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
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    await queryInterface.createTable('Dosen', {
      nip: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nama_dosen: {
        type: Sequelize.STRING(30)
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    await queryInterface.createTable('Jabatan', {
      id_jabatan: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    await queryInterface.createTable('Pengajar', {
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    await queryInterface.createTable('Program_Studi', {
      kode_prodi: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      }
    });
    await queryInterface.createTable('Jurusan', {
      kode_jurusan: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      }
    });
    await queryInterface.createTable('Mahasiswa', {
      nim: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nama: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false
      },
      nomor_ponsel:{
          type: Sequelize.STRING(13),
          allowNull: true
      },
      url_foto:{
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    await queryInterface.createTable('Kelas', {
      kode_kelas: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
      },
      tahun:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }); 
    await queryInterface.addColumn(
      'Mata_Kuliah', 
      'kode_program_studi',{
        type: Sequelize.STRING,
        allowNull: false,
        reference: {
          model: 'Program_Studi',
          key: 'kode_program_studi'
        }
    }) 
    await queryInterface.addColumn(
      'Perkuliahan', 
      'kode_kelas',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Kelas',
          key: 'kode_kelas'
        }
    })
    await queryInterface.addColumn(
      'Studi', 
      'id_mahasiswa',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Mahasiswa',
          key: 'id_mahasiswa'
        }
    })  
    await queryInterface.addConstraint('Studi',{
      fields: ['id_perkuliahan', 'id_mahasiswa'],
      type: 'Unique',
      name: 'c_unique0_studi'
    })
    await queryInterface.addConstraint('Perkuliahan',{
      fields: ['id_mata_kuliah', 'kode_kelas'],
      type: 'Unique',
      name: 'c_unique0_perkuliahan'
    })
    await queryInterface.addColumn(
      'Mahasiswa', 
      'kode_kelas',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Kelas',
          key: 'kode_kelas'
        },
    })
    await queryInterface.addColumn(
      'Kelas', 
      'kode_program_studi',{
        type: Sequelize.STRING(15),
        allowNull: false,
        reference: {
          model: 'Program_Studi',
          key: 'kode_program_studi'
        }
    }) 
    await queryInterface.addColumn(
      'Kelas', 
      'nip',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Dosen',
          key: 'nip'
        }
    })
    await queryInterface.addColumn(
      'Pengajar', 
      'id_perkuliahan',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Perkuliahan',
          key: 'id_perkuliahan'
        },
    });
    await queryInterface.addColumn(
      'Pengajar', 
      'nip',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Dosen',
          key: 'nip'
        },
    });
    await queryInterface.addColumn(
      'Dosen', 
      'id_jabatan',{
        type: Sequelize.STRING,
        allowNull: false,
        reference: {
          model: 'Jabatan',
          key: 'id_jabatan'
        },
    }); 
    await queryInterface.addColumn(
      'Program_Studi', 
      'nip',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Dosen',
          key: 'nip'
        },
    });
    await queryInterface.addColumn(
      'Program_Studi', 
      'kode_jurusan',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Jurusan',
          key: 'kode_jurusan'
        },
    });      
    await queryInterface.addColumn(
      'Jurusan', 
      'nip',{
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Dosen',
          key: 'nip'
        },
    });        
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Perkuliahan', 'c_unique0_perkuliahan')
    await queryInterface.removeConstraint('Studi', 'c_unique0_studi')
    await queryInterface.removeColumn('Studi', 'id_mahasiswa')
    await queryInterface.removeColumn('Perkuliahan', 'kode_kelas')
    await queryInterface.removeColumn('Mata_Kuliah', 'kode_program_studi')
    await queryInterface.removeColumn('Kelas', 'nip')
    await queryInterface.removeColumn('Kelas', 'kode_program_studi')
    await queryInterface.removeColumn('Mahasiswa', 'kode_kelas')
    await queryInterface.removeColumn('Dosen', 'id_jabatan');
    await queryInterface.removeColumn('Pengajar', 'nip');
    await queryInterface.removeColumn('Pengajar', 'id_perkuliahan');
    await queryInterface.removeColumn('Jurusan', 'nip');
    await queryInterface.removeColumn('Program_Studi', 'kode_jurusan');
    await queryInterface.removeColumn('Program_Studi', 'nip');
    await queryInterface.dropTable('Studi');
    await queryInterface.dropTable('Perkuliahan');
    await queryInterface.dropTable('Mata_Kuliah');
    await queryInterface.dropTable('Pengajar');
    await queryInterface.dropTable('Jabatan');
    await queryInterface.dropTable('Dosen');
    await queryInterface.dropTable('Jurusan');
    await queryInterface.dropTable('Program_Studi');
    await queryInterface.dropTable('Kelas');
    await queryInterface.dropTable('Mahasiswa');
  }
};
