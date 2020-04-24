'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('markets', [
      { title:'avrupa_pazari',description: 'Avrupa pazar fiyatları',landid:1, createdAt : new Date(), updatedAt : new Date()},
      { title:'turkiye_pazari',description: 'Türkiye pazar fiyatları',landid:1, createdAt : new Date(), updatedAt : new Date()},
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
