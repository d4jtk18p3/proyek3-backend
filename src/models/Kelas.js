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
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tahun: {
    type: Sequelize.STRING(9),
    allowNull: false
  }
})

export default Kelas
