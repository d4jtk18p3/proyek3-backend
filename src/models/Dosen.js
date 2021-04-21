import Sequelize from 'sequelize'

import db from '../db.js'

const Dosen = db.define(
  'Dosen',
  {
    NIP: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    nama_dosen: {
      type: Sequelize.STRING,
      allowNull: false
    },
    jabatan: {
      type: Sequelize.STRING
      // allowNull: false
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
    tableName: 'Dosen'
  }
)

export default Dosen
