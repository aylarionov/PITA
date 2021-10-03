import { combineReducers } from "redux";
import authReducer from "./authReducer";
import isNMReducer from "./isNMReducer";
import likesReducer from "./likesReducer";
import loaderReducer from "./loaderReducer";
import modalReducer from "./modalReducer";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  likes: likesReducer,
  isAuth: authReducer,
  isLoading: loaderReducer,
  isNotMain: isNMReducer,
  modalActive: modalReducer,
});

export default rootReducer;
