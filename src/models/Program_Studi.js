import Sequelize from 'sequelize'
import db from '../db'

const Program_Studi = db.define('Program_Studi', {
  kode_prodi: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  }
})

export default Program_Studi
