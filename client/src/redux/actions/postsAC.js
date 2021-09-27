import { ADD_POST } from "../types/postsType";
import PostService from "../../service/PostService";

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const createPost =
  (title, body, tag, privateStatus, insight, UserId) => async (dispatch) => {
    try {
      const res = await PostService.fetchPost(
        title,
        body,
        privateStatus,
        tag,
        insight,
        UserId
      );
      
      dispatch(addPost(res.data));
      return "ok";
    } catch (e) {
      return e.response?.data?.message;
    }
  };
