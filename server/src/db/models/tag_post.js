'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag_Post extends Model {

    static associate({ Post, Tag }) {
      this.belongsTo(Post, { foreignKey: 'PostId' })
      this.belongsTo(Tag, { foreignKey: 'TagId' })
    }
  };
  Tag_Post.init({
    TagId: DataTypes.INTEGER,
    PostId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tag_Post',
  });
  return Tag_Post;
};
