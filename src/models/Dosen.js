import Sequelize from 'sequelize'
import db from '../db'

const Dosen = db.define('Dosen', {
  nip: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nama_dosen: {
    type: Sequelize.STRING(30)
  }
})

export default Dosen
