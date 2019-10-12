// Import Sequelize library for `Sequelize.literal`.
var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    food_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    food_ing: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    food_poster: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    food_time: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    food_cal: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    share_as: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    saved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }
  });
  return Food;
};