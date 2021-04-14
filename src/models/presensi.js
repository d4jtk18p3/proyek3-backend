import Sequelize from 'sequelize'

import db from '../db'

const Presensi = db.define('Presensi', {
  tipe_presensi: {
    type: Sequelize.STRING(10)
  }
});

export default Presensi;
