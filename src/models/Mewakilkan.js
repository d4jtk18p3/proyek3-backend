import Sequelize from 'sequelize'

import db from '../db'

const Mewalikan = db.define('Mewalikan', {
  NIP: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_kelas: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  tahun_mulai: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tahun_berakhir: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status_aktif: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

export default Mewalikan
