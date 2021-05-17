import Sequelize from 'sequelize'
import db from '../db'

const Dosen = db.define('Dosen', {
  nip: {
    type: Sequelize.STRING(30),
    allowNull: false,
    primaryKey: true
  },
  nama_dosen: {
    type: Sequelize.STRING(30),
    allowNull: false
  }
})

export default Dosen
