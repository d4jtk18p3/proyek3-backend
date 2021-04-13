import Sequelize from 'sequelize'

import db from '../db'

const User = db.define('User', {
    id_kuliah: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tahun_akademik: {
        type: Sequelize.INTEGER,
        allowNull : false
    },
})