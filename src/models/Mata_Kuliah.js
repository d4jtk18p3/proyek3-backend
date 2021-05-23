import Sequelize from 'sequelize'

import db from '../db'

const mataKuliah = db.define('Mata_Kuliah', {
  id: {
<<<<<<< HEAD:src/models/Mata_Kuliah.js
    type: Sequelize.INTEGER,
=======
    type: Sequelize.STRING(8),
>>>>>>> 277af543a6446f9e0ce89e8a3849bcc5da691443:src/models/MataKuliah.js
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
