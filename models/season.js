'use strict';
module.exports = (sequelize, DataTypes) => {
  const season = sequelize.define('season', {
    begindate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    title: DataTypes.STRING
  }, {});
  season.associate = function(models) {
    // associations can be defined here
    season.hasMany(models.price);
  };
  return season;
};