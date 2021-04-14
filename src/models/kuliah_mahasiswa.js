import Sequelize from 'sequelize'

import db from '../db'

const Kuliah_Mahasiswa = db.define('Kuliah_Mahasiswa', {
  kuliah_mahasiswa_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
});

export default Kuliah_Mahasiswa;
