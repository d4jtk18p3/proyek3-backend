import Sequelize from 'sequelize'

import db from '../db'

const TataUsaha = db.define(
  'TataUsaha',
  {
    id_tataUsaha: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nip: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    permissions: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: 'TataUsaha'
  }
)

export default TataUsaha
