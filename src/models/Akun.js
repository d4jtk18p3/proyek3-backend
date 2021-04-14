import Sequelize from 'sequelize'

import db from '../db'

const Akun = db.define('Akun', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tipe_akun: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default Akun