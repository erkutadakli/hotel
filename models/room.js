'use strict';
module.exports = (sequelize, DataTypes) => {
  var room = sequelize.define('room', {
    status: DataTypes.BOOLEAN,
    capacity: DataTypes.INTEGER
  }, {});
  room.associate = function(models) {
    // Room has many languageitem
    room.hasMany(models.languageitem,{
      foreignKey: 'tableid'
    });
  };
  return room;
};