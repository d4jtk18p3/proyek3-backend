import Sequelize from 'sequelize'

import db from '../db'

const Kelas = db.define('Kelas', {
  id_kelas:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  kode_kelas: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default Kelas