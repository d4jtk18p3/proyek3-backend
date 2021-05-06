import Sequelize from 'sequelize'

import db from '../db'

const Perkuliahan = db.define('Perkuliahan', {
  id_perkuliahan: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  tahun_akademik: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

export default Perkuliahan
