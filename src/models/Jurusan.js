import Sequelize from 'sequelize'

import db from '../db'

const Jurusan = db.define('Jurusan', {
  kode_jurusan: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default Jurusan
