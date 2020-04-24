'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('languageitems', [
      { tableid:1, key : 'title', value : 'Standart Oda',langcode:'tr', createdAt : new Date(), updatedAt : new Date()}, // Standart oda
      { tableid:1, key : 'title', value : 'Standart Room',langcode:'en', createdAt : new Date(), updatedAt : new Date()}, // Standart oda
      { tableid:1, key : 'description', value : '22 m² lik alanda 2 yetişkin + 1 çocuk misafiri konaklatacak şekilde dizayn edilmiştir.',langcode:'tr', createdAt : new Date(), updatedAt : new Date()}, // Standart oda
      { tableid:1, key : 'description', value : 'Standart oda ingilizce metin...',langcode:'en', createdAt : new Date(), updatedAt : new Date()}, // Standart oda



      { tableid:2, key : 'title', value : 'Aile Odası',langcode:'tr', createdAt : new Date(), updatedAt : new Date()}, // Aile odası
      { tableid:2, key : 'title', value : 'Family Room',langcode:'en', createdAt : new Date(), updatedAt : new Date()}, // Aile odası


      { tableid:3, key : 'title', value : 'Deniz Manzaralı oda',langcode:'tr', createdAt : new Date(), updatedAt : new Date()}, // Deniz manzaralı oda
      { tableid:3, key : 'title', value : 'See Room',langcode:'en', createdAt : new Date(), updatedAt : new Date()}, // Deniz manzaralı oda


      { tableid:4, key : 'title', value : 'Kral Dairesi',langcode:'tr', createdAt : new Date(), updatedAt : new Date()}, // deluxe oda
      { tableid:4, key : 'title', value : 'Deluxe Room',langcode:'en', createdAt : new Date(), updatedAt : new Date()}, // deluxe oda
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
