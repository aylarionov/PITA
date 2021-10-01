const postService = require("../service/post.service");
const likeService = require("../service/like.service");

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

const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await postService.getPost(id);

    res.json(post);
  } catch (e) {
    next(e);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    if (req.body.data) {
      const { id } = req.body.data;

      const posts = await postService.getAllPosts(id);
      return res.json(posts);
    }

    const posts = await postService.getAllPosts();

    res.json(posts);
  } catch (e) {
    next(e);
  }
};

const changeLikeStatus = async (req, res, next) => {
  try {
    const { UserId, PostId } = req.body.data;

    await likeService.changeLikeStatus(UserId, PostId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
};

const getAllLikes = async (req, res, next) => {
  try {
    const {UserId} = req.body.data;
    const likes = await likeService.getAllLikes(UserId);

    res.json(likes);
  } catch (e) {
    next(e)
  }
}

module.exports = {
  create,
  getPost,
  getAllPosts,
  changeLikeStatus,
  getAllLikes
};
