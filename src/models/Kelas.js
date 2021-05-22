import Sequelize from 'sequelize'

import db from '../db'

const Kelas = db.define('Kelas', {
  kode_kelas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  kode_program_studi: {
    type: Sequelize.STRING(15),
    allowNull: false,
    unique: true
  },
  nip: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  tahun: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

export default Kelas
