import Sequelize from 'sequelize'

import db from '../db'

const Menjabat = db.define('Menjabat', {
  id_mahasiswa: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_ormawa: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  jabatan: {
    type: Sequelize.STRING,
    allowNull: false
  },
  periode: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

export default Menjabat
