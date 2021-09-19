"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {

    static associate({User}) {
      this.belongsTo(User, { foreignKey: "UserId" });
    }
  }
  Token.init(
    {
      UserId: DataTypes.INTEGER,
      refreshToken: {
        type: DataTypes.STRING,
        require: true,
      },
    },
    {
      sequelize,
      modelName: "Token",
    }
  );
  return Token;
};
