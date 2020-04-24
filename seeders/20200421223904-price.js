'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('prices', [
      { roomid:1,seasonid: 1,price:100,marketid:1, adult:1,child:0,childAges:'[]', createdAt : new Date(), updatedAt : new Date()},
      { roomid:2,seasonid: 1,price:120,marketid:2,adult:1,child:0,childAges:'[]', createdAt : new Date(), updatedAt : new Date()},

      { roomid:1,seasonid: 1,price:120,marketid:2,adult:1,child:1, childAges:'[{min:0,max:2}]', createdAt : new Date(), updatedAt : new Date()},
      { roomid:2,seasonid: 1,price:120,marketid:2,adult:1,child:2, childAges:'[{min:0,max:2},{min:2,max:12}]', createdAt : new Date(), updatedAt : new Date()},

      

      { roomid:2,seasonid: 2,price:90,marketid:1,adult:1,child:0,childAges:'[]', createdAt : new Date(), updatedAt : new Date()},
      { roomid:2,seasonid: 2,price:95,marketid:2,adult:1,child:0,childAges:'[]', createdAt : new Date(), updatedAt : new Date()},
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
