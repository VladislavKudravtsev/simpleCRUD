"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {
        onDelete: "CASCADE",
        foreignKey: "userId",
      });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
      name: {
        singular: "post",
        plural: "posts",
      },
    }
  );
  return Post;
};
