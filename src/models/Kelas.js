import Sequelize from 'sequelize'

import db from '../db'

const User = db.define('User', {
    id_kelas:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    kode_kelas: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default User