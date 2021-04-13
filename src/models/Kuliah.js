import Sequelize from 'sequelize'

import db from '../db'

const Kuliah = db.define('Kuliah', {
  id_kuliah: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  tahun_akademik: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
})

export default Kuliah