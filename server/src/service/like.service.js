const { Like } = require("../db/models");

const changeLikeStatus = async (UserId, PostId) => {
  const like = await Like.findOne({ where: { UserId, PostId } });

  if (like) {
    return await Like.destroy({ where: { UserId, PostId } });
  } else {
    return await Like.create({ UserId, PostId });
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

module.exports = {
  changeLikeStatus,
  getAllLikes,
};
