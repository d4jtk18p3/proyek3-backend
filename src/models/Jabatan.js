import Sequelize from 'sequelize'
import db from '../db'

const Jabatan = db.define('Jabatan', {
  id_jabatan: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  }
})

export default Jabatan
