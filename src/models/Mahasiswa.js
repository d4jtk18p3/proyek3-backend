import Sequelize from 'sequelize'

import db from '../db'

const Mahasiswa = db.define(
  'Mahasiswa',
  {
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
    angkatan: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    tingkat: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
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
    permissions: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: 'Mahasiswa'
  }
)

export default Mahasiswa
