import Sequelize from 'sequelize'

import db from '../db'

const OrganisasiMahasiswa = db.define('Ormawa', {
  id_ormawa: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true
  },
  nama_ormawa: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url_logo_ormawa: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

export default OrganisasiMahasiswa
