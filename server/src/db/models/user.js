"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post}) {
      this.hasMany(Post, { foreignKey: "UserId" });
      this.belongsToMany(Post, {
        foreignKey: "UserId",
        through: "Comment",
        as: "posts",
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
      },
      isActivated: {
        type: DataTypes.BOOLEAN,
      },
      activationLink: DataTypes.TEXT,
      role: {
        type: DataTypes.ENUM({
          values: ["admin", "moderator"],
        }),
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
