import Sequelize from 'sequelize'

import db from '../db'

const Nilai = db.define('Nilai', {
  nilai_semester: {
    type: Sequelize.STRING(2)
  }
});

export default Nilai;
