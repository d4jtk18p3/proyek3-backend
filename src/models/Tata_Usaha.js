import Sequelize from 'sequelize'
import db from '../db'

const TataUsaha = db.define('Tata_Usaha', {
  nip: {
    type: Sequelize.STRING(30),
    allowNull: false,
    primaryKey: true
  },
  nama_staff: {
    type: Sequelize.STRING(30),
    allowNull: false
  }
})

export default TataUsaha
