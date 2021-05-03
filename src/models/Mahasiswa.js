import Sequelize from 'sequelize'

import db from '../db'

const Mahasiswa = db.define('mahasiswa', {
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
  kode_kelas: {
    type: Sequelize.INTEGER,
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
    allowNull: false
  }
})

export default Mahasiswa
