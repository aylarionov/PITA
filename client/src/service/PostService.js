import $api from "../http";

const fetchPost = (title, body, privateStatus, tag, insight, UserId) => {
  return $api.post("post", {
    data: { title, body, tag, insight, privateStatus, UserId },
  });
};

const getPublic = () => {
  return $api.get("post/post");
};

const getAllLikes = (UserId) => {
  return $api.post("post/like", { data: { UserId } });
};

const changeLikeStatus = (UserId, PostId) => {
  return $api.put("post/like", { data: { UserId, PostId } });
};

const PostService = { fetchPost, getPublic, getAllLikes, changeLikeStatus };
export default PostService;
