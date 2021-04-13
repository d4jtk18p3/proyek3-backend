import Sequelize from 'sequelize'

import db from '../db'

const TataUsaha = db.define('TataUsaha', {
  id_tataUsaha: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nip: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  nama : {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default TataUsaha