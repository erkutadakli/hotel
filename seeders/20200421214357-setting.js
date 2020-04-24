'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('settings', [
      { key:'hotel-title',value: 'Erkut Resort Hotel', createdAt : new Date(), updatedAt : new Date()},
      { key:'hotel-description',value: 'Erkut Resort Alanya', createdAt : new Date(), updatedAt : new Date()},
      { key:'hotel-phone',value: '01700762645', createdAt : new Date(), updatedAt : new Date()},
      { key:'total-room',value: '25', createdAt : new Date(), updatedAt : new Date()},
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
