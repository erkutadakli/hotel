'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('seasons', [
      { begindate:'2020-01-01',enddate: '2020-01-30',title:'Ocak ayı', createdAt : new Date(), updatedAt : new Date()},
      { begindate:'2020-01-30',enddate: '2020-02-25',title:'Şubat ayı', createdAt : new Date(), updatedAt : new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
