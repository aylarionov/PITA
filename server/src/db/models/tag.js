"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {

    static associate({ Post }) {
      this.belongsToMany(Post, {
        foreignKey: "TagId",
        through: "Tag_Post",
        as: "children",
      });
    }
  }
  Tag.init(
    {
      name: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },

    {
      sequelize,
      modelName: "Tag",
    }
  );
  return Tag;
};
