import Sequelize from 'sequelize'

import db from '../db'

const Jadwal = db.define('Jadwal', {
  id_jadwal: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  waktu_mulai: {
    type: Sequelize.DATE
  },
  waktu_mulai: {
    type: Sequelize.DATE
  }
});

export default Jadwal;
