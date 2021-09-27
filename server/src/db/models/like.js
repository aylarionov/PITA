"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Post }) {
      this.belongsTo(User, { foreignKey: "UserId" });
      this.belongsTo(Post, { foreignKey: "PostId" });
    }
  }
  Like.init(
    {
      UserId: DataTypes.INTEGER,
      PostId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
