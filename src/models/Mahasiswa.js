import Sequelize from 'sequelize'

import db from '../db'

const Mahasiswa = db.define('Mahasiswa', {
  nim: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nama: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  kode_kelas: {
    type: Sequelize.INTEGER,
    allowNull: true
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
  }
})

export default Mahasiswa
