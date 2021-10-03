import PostService from "../../service/PostService";
import { CHANGE_STATUS, GET_ALL } from "../types/likesType";

export const changeLikeStatus = (status, id) => ({
  type: CHANGE_STATUS,
  payload: { status, id },
});

export const getAllLikes = (likes) => ({
  type: GET_ALL,
  payload: likes,
});

export const getAll = (UserId) => async (dispatch) => {
  try {
    const res = await PostService.getAllLikes(UserId);

    dispatch(getAllLikes(res.data));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const changeStatus = (UserId, PostId) => async (dispatch) => {
  try {
    const res = await PostService.changeLikeStatus(UserId, PostId);

    dispatch(changeLikeStatus(res.data, PostId));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};
