'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn(
        'Program_Studi', 
        'nip',{
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: 'Dosen',
            key: 'nip'
          },
      });
      await queryInterface.addColumn(
        'Program_Studi', 
        'kode_jurusan',{
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: 'Jurusan',
            key: 'kode_jurusan'
          },
      });      
      await queryInterface.addColumn(
        'Jurusan', 
        'nip',{
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: 'Dosen',
            key: 'nip'
          },
      });        
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Jurusan', 'nip');
    await queryInterface.removeColumn('Program_Studi', 'kode_jurusan');
    await queryInterface.removeColumn('Program_Studi', 'nip');
  }
};
