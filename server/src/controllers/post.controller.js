const postService = require("../service/post.service");

const create = async (req, res, next) => {
  try {
    const { title, body, privateStatus, tag, insight, UserId } = req.body.data;
    const post = await postService.createPost(
      title,
      body,
      privateStatus,
      tag,
      insight,
      UserId
    );

    res.json(post);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};
