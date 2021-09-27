"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ Tag, User, Like }) {
      this.belongsTo(User, { foreignKey: "UserId" });
      this.belongsToMany(Tag, {
        foreignKey: "PostId",
        through: "Tag_Post",
        as: "tags",
      });
      this.belongsToMany(User, {
        foreignKey: "PostId",
        through: "Comment",
        as: "users",
      });
    }
  }
  Post.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      private: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      aproved: DataTypes.BOOLEAN,
      insight: DataTypes.BOOLEAN,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
