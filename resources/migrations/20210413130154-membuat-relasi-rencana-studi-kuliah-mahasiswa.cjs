'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'RencanaStudi',
      'id_mahasiswa',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mahasiswa',
          key: 'id_mahasiswa',
        },
        unique: true
      }
    );
    await queryInterface.addColumn(
      'RencanaStudi',
      'id_kuliah',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kuliah',
          key: 'id_kuliah',
        },
        unique: true
      }
    );
    await queryInterface.addConstraint('RencanaStudi', {
        fields: ['id_mahasiswa', 'id_kuliah'],
        type: 'unique',
        name: 'c_unique0_rencana_studi'
    });
    await queryInterface.addColumn(
      'KuliahMahasiswa',
      'id_mahasiswa',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'RencanaStudi',
          key: 'id_mahasiswa',
        },
        unique: true
      }
    );
    await queryInterface.addColumn(
      'KuliahMahasiswa',
      'id_kuliah',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'RencanaStudi',
          key: 'id_kuliah',
        },
        unique: true
      }
    );
    await queryInterface.addColumn(
      'KuliahMahasiswa',
      'id_kelas',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Kelas',
          key: 'id_kelas',
        },
        unique: true
      }
    );
    await queryInterface.addConstraint('KuliahMahasiswa', {
      fields: ['id_mahasiswa', 'id_kuliah'],
      type: 'unique',
      name: 'c_unique0_kuliah_mahasiswa'
    });
    await queryInterface.addConstraint('KuliahMahasiswa', {
      fields: ['id_mahasiswa', 'id_kelas'],
      type: 'unique',
      name: 'c_unique1_kuliah_mahasiswa'
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('KuliahMahasiswa','c_unique1_kuliah_mahasiswa');
    await queryInterface.removeConstraint('KuliahMahasiswa','c_unique0_kuliah_mahasiswa');
    await queryInterface.removeColumn('KuliahMahasiswa', 'id_kelas');
    await queryInterface.removeColumn('KuliahMahasiswa', 'id_kuliah');
    await queryInterface.removeColumn('KuliahMahasiswa', 'id_mahasiswa');
    await queryInterface.removeConstraint('RencanaStudi','c_unique0_rencana_studi');
    await queryInterface.removeColumn('RencanaStudi', 'id_kuliah');
    await queryInterface.removeColumn('RencanaStudi', 'id_mahasiswa');
  }
};
