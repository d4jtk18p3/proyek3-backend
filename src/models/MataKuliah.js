import Sequelize from 'sequelize'

import db from '../db'

const MataKuliah = db.define('MataKuliah', {
  id_mata_kuliah: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  semester: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  nama_mata_kuliah: {
    type: Sequelize.STRING(50),
    allowNull: false
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

export default MataKuliah
