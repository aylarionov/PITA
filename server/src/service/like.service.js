const { Op } = require("sequelize");
const { Like, Post } = require("../db/models");

const changeLikeStatus = async (UserId, PostId) => {
  const like = await Like.findOne({ where: { UserId, PostId } });

  if (like) {
    await Like.destroy({ where: { UserId, PostId } });
    return "destroy";
  } else {
    await Like.create({ UserId, PostId });
    return "create";
  }
};

const getAllLikes = async (UserId) => {
  const postsWithLike = await Like.findAll({
    where: { UserId },
    attributes: ["PostId"],
    raw: true,
  });
  return postsWithLike.map((postId) => Object.values(postId)).flat();
};

const getLikesPosts = async (UserId) => {
  const postsId = await Like.findAll({
    where: { UserId },
    attributes: ["PostId"],
    raw: true,
    nest: true,
  });

  const likesPosts = await Post.findAll({
    where: {
      id: { [Op.or]: [...postsId.map((post) => Object.values(post)[0])] },
    },
    attributes: ["id", "title", "body", "insight"],
    raw: true,
  });

  return likesPosts;
};
module.exports = {
  changeLikeStatus,
  getAllLikes,
  getLikesPosts,
};
