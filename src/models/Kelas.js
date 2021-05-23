import Sequelize from 'sequelize'

import db from '../db'

const Kelas = db.define('Kelas', {
  kode_kelas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  kode_program_studi: {
    type: Sequelize.STRING(15),
    allowNull: false,
    unique: true
  },
  nip: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  tahun: {
<<<<<<< HEAD
    type: Sequelize.STRING(9),
=======
    type: Sequelize.INTEGER,
>>>>>>> 277af543a6446f9e0ce89e8a3849bcc5da691443
    allowNull: false
  }
})

export default Kelas
