'use strict';
module.exports = (sequelize, DataTypes) => {
  const setting = sequelize.define('setting', {
    key: DataTypes.STRING,
    value: DataTypes.STRING
  }, {});
  setting.associate = function(models) {
    // associations can be defined here
  };
  return setting;
};