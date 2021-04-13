import Sequelize from 'sequelize'

import db from '../db'

const User = db.define('User', {
    id_tataUsaha: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nip: {
        type: Sequelize.INTEGER,
        allowNull : false
    },
    nama : {
        type: Sequelize.STRING,
        allowNull: false
    }
})