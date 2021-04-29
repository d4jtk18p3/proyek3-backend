import Sequelize from 'sequelize'
import db from '../db'

const Prodi = db.define('Prodi', {
  kode_prodi: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  }
})

export default Prodi
