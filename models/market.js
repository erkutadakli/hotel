'use strict';
module.exports = (sequelize, DataTypes) => {
  const market = sequelize.define('market', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    landid: DataTypes.INTEGER
  }, {});
  market.associate = function(models) {
    // associations can be defined here
  };
  return market;
};