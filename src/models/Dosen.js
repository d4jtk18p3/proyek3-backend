import Sequelize from 'sequelize'

import db from '../db.js'

const Dosen = db.define('Dosen', {
  NIP: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nama_dosen: {
    type: Sequelize.STRING,
    allowNull: false
  },
  jabatan: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'Dosen'
})
console.log("Halo");
export default Dosen
