import Sequelize from 'sequelize'

import db from '../db'

const KuliahMahasiswa = db.define('KuliahMahasiswa', {
  kuliah_mahasiswa_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
})

export default KuliahMahasiswa
