import Sequelize from 'sequelize'

import db from '../db'

const Prodi = db.define('Prodi', {
  kode_prodi: {
    type: Sequelize.STRING(15),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
})

export default Prodi
