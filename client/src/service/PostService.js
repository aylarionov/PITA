import $api from "../http";

const fetchPost = (title, body, privateStatus, tag, insight, UserId) => {
  return $api.post("post", {data: {title, body, tag, insight, privateStatus, UserId}});
};

const PostService = {fetchPost};
export default PostService;