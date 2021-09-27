import { SET_LOADING } from "../types/loaderTypes";

const loaderReducer = (state = false, action) => {
    switch (action.type) {
      case SET_LOADING:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default loaderReducer;