import Sequelize from 'sequelize'

import db from '../db'

const mataKuliah = db.define('Mata_Kuliah', {
  id: {
    type: Sequelize.STRING(8),
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
  }
})

export default mataKuliah
