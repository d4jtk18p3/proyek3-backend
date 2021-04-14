import Sequelize from 'sequelize'

import db from '../db'

const Mahasiswa = db.define('Mahasiswa', {
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
    type: Sequelize.STRING,
    allowNull: false
  },
  nomor_hp: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url_foto: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default Mahasiswa
