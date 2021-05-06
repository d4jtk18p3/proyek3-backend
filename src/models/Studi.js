import Sequelize from 'sequelize'

import db from '../db'

const Studi = db.define('Studi', {
  id_studi: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
})

export default Studi
