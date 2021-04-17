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
          type: Sequelize.DATE
        },
        updatedAt: {
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
      username: {
        type: Sequelize.STRING,
        reference: {
          model: 'Akun',
          key: 'username',
        },
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
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
        primaryKey: true
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
      username: {
        type: Sequelize.STRING,
        reference: {
          model: 'Akun',
          key: 'username',
        },
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('TataUsaha', {
      id_tataUsaha: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nip: {
        type: Sequelize.INTEGER,
        allowNull : false,
        unique: true
      },
      nama : {
        type: Sequelize.STRING,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        reference: {
          model: 'Akun',
          key: 'username',
        },
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('Jurusan', {
      kode_jurusan: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('Prodi', {
      kode_prodi: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true
      },
      kode_jurusan: {
        type: Sequelize.STRING(15),
        reference: {
          model: 'Jurusan',
          key: 'kode_jurusan',
       },
       allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
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
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
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
      id_ormawa: {
        type: Sequelize.INTEGER,
        reference: {
        model: 'Ormawa',
        key: 'id_ormawa',
       },
       unique: true
      },
      id_mahasiswa: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Mahasiswa',
          key: 'id_mahasiswa',
        },
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
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
      NIP: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Dosen',
          key: 'NIP',
        },
        allowNull: false,
        primaryKey: true
      },
      kode_prodi: {
        type: Sequelize.STRING,
        references: {
          model: 'Prodi', 
          key: 'kode_prodi', 
        },
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('MataKuliah', {
      id_mata_kuliah: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('Kuliah', { 
      id_kuliah: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      tahun_akademik: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      id_mata_kuliah: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MataKuliah', 
          key: 'id_mata_kuliah', 
        },
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
    await queryInterface.createTable('Kelas', {
      id_kelas:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      kode_kelas: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      kode_prodi: {
        type: Sequelize.STRING(15),
        references: {
          model: 'Prodi', 
          key: 'kode_prodi', 
        },
        allowNull: false
      },
      id_kuliah: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kuliah', 
          key: 'id_kuliah',
        },
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
    await queryInterface.createTable('Mewakilkan', {
      tahun_mulai: {
        type: Sequelize.STRING(4)
      },
      tahun_berakhir: {
        type: Sequelize.STRING(4)
      },
      status_aktif: {
        type: Sequelize.BOOLEAN
      },
      NIP: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Dosen',
          key: 'NIP',
        },
        allowNull: false,
        primaryKey: true
      },
      id_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kelas', 
          key: 'id_kelas', 
        },
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('Kuliah_Mahasiswa', {
        kuliah_mahasiswa_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        id_kuliah: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Kuliah', 
            key: 'id_kuliah', 
          },
          unique: true
        },
        id_mahasiswa: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Mahasiswa', 
            key: 'id_mahasiswa', 
          },
          unique: true
      },
      id_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kelas', 
          key: 'id_kelas', 
        },
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
      });
    await queryInterface.createTable('Rencana_Studi',{
        id_mahasiswa: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Mahasiswa', 
            key: 'id_mahasiswa', 
          },
          unique: true
        },
        id_kuliah: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Kuliah', 
            key: 'id_kuliah', 
          },
          unique: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
    });
    await queryInterface.createTable('Jadwal', {
      id_jadwal: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      waktu_mulai: {
        type: Sequelize.DATE
      },
      waktu_selesai: {
        type: Sequelize.DATE
      },
      id_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kelas', 
          key: 'id_kelas', 
        },
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('Nilai', {
      nilai_semester: {
        type: Sequelize.STRING(2)
      },
      id_mahasiswa:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Mahasiswa', 
          key: 'id_mahasiswa', 
        },
        unique: true
      },
      id_mata_kuliah: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MataKuliah', 
          key: 'id_mata_kuliah', 
        },
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('Presensi', {
      tipe_presensi: {
        type: Sequelize.STRING(10)
      },
      id_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kelas', 
          key: 'id_kelas', 
        },
        unique: true
      },
      id_jadwal: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jadwal', 
          key: 'id_jadwal', 
        },
        unique: true
      },
      id_mahasiswa: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kuliah_Mahasiswa', 
          key: 'id_mahasiswa', 
        },
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('Mengajar', {
      id_kuliah: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kuliah', 
          key: 'id_kuliah', 
        },
        unique: true
      },
      NIP: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })

  //constraint
    await queryInterface.addConstraint('Rencana_Studi', {
      fields: ['id_mahasiswa', 'id_kuliah'],
      type: 'unique',
      name: 'c_unique0_rencana_studi'
    });
    await queryInterface.addConstraint('Kuliah_Mahasiswa', {
      fields: ['id_mahasiswa', 'id_kuliah'],
      type: 'unique',
      name: 'c_unique0_kuliah_mahasiswa'
    });
    await queryInterface.addConstraint('Kuliah_Mahasiswa', {
      fields: ['id_mahasiswa', 'id_kelas'],
      type: 'unique',
      name: 'c_unique1_kuliah_mahasiswa'
    });
    await queryInterface.addConstraint('Kuliah', {
      fields: ['id_mata_kuliah', 'tahun_akademik'],
      type: 'unique',
      name: 'c_unique0_kuliah'
    })
    await queryInterface.addConstraint('Kelas', {
      fields: ['id_kuliah', 'id_kelas'],
      type: 'unique',
      name: 'c_unique1_kelas'
    });
    await queryInterface.addConstraint('Presensi', {
      fields: ['id_mahasiswa', 'id_kelas'],
      type: 'unique',
      name: 'c_unique0_presensi'
    });
  },
  
  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Presensi','c_unique0_presensi');
    await queryInterface.removeConstraint('Kuliah_Mahasiswa','c_unique1_kuliah_mahasiswa');
    await queryInterface.removeConstraint('Kuliah_Mahasiswa','c_unique0_kuliah_mahasiswa');
    await queryInterface.removeConstraint('Rencana_Studi','c_unique0_rencana_studi');
    await queryInterface.removeConstraint('Kuliah', 'c_unique0_kuliah');
    await queryInterface.removeConstraint('Kelas', 'c_unique1_kelas');
    await queryInterface.dropTable('Presensi');
    await queryInterface.dropTable('Jadwal');
    await queryInterface.dropTable('Mengajar');
    await queryInterface.dropTable('Kuliah_Mahasiswa');
    await queryInterface.dropTable('Rencana_Studi');
    await queryInterface.dropTable('Menjabat');
    await queryInterface.dropTable('Nilai');
    await queryInterface.dropTable('Mahasiswa');
    await queryInterface.dropTable('Mewakilkan');
    await queryInterface.dropTable('Memimpin');
    await queryInterface.dropTable('Dosen');
    await queryInterface.dropTable('TataUsaha');
    await queryInterface.dropTable('Akun');
    await queryInterface.dropTable('Ormawa');
    await queryInterface.dropTable('Kelas');
    await queryInterface.dropTable('Kuliah');
    await queryInterface.dropTable('MataKuliah');
    await queryInterface.dropTable('Prodi');   
  }
};