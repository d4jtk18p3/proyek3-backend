import Sequelize from 'sequelize'

import db from '../db'

const Mewakilkan = db.define('Mewakilkan', {
  NIP: {
    type: Sequelize.INTEGER,
    allowNull: false,
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

export default Mewakilkan
