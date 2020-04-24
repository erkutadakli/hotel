'use strict';
module.exports = (sequelize, DataTypes) => {
  const languageitem = sequelize.define('languageitem', {
    tableid: DataTypes.INTEGER,
    key: DataTypes.STRING,
    value: DataTypes.STRING,
    langcode: DataTypes.STRING
  }, {});
  languageitem.associate = function(models) {
    // associations can be defined here
    languageitem.belongsTo(models.room,{
      foreignKey: 'tableid'
    });
  };
  return languageitem;
};