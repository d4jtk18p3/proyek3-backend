import Sequelize from 'sequelize'

import db from '../db'

const Dosen = db.define('Dosen', {
    NIP: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nama_dosen: {
        type: Sequelize.STRING,
        allowNull: false
    },
    jabatan: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Dosen