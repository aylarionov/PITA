import { combineReducers } from "redux";
import authReducer from "./authReducer";
import isNMReducer from "./isNMReducer";
import loaderReducer from "./loaderReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  isAuth: authReducer,
  isLoading: loaderReducer,
  isNotMain: isNMReducer,
});

export default rootReducer;
