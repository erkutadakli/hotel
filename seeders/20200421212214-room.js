'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('rooms', [
      { id:1, status : true, capacity : 2, createdAt : new Date(), updatedAt : new Date()}, // Standart oda
      { id:2, status : true, capacity : 2, createdAt : new Date(), updatedAt : new Date()}, // Aile odası
      { id:3, status : true, capacity : 2, createdAt : new Date(), updatedAt : new Date()}, // Deniz manzaralı oda
      { id:4, status : true, capacity : 2, createdAt : new Date(), updatedAt : new Date()}, // deluxe oda
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
