'use strict';
module.exports = (sequelize, DataTypes) => {
  const price = sequelize.define('price', {
    roomid: DataTypes.INTEGER,
    seasonid: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    marketid: DataTypes.INTEGER,
    adult: DataTypes.INTEGER,
    child: DataTypes.INTEGER,
    childAges: DataTypes.STRING,
  }, {});
  price.associate = function(models) {
    // associations can be defined here
    // price.hasMany(models.season,{
    //   foreignKey: 'seasonid'
    // });
    price.belongsTo(models.season, { foreignKey: 'seasonId' });

  };
  return price;
};