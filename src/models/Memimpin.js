import Sequelize from 'sequelize'

import db from '../db'

const Memimpin = db.define('Memimpin', {
  NIP: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  kode_prodi: {
    type: Sequelize.STRING(15),
    allowNull: false
  },
  tahun_mulai: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tahun_berakhir: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default Memimpin
