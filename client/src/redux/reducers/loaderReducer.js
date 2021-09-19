import { SET_LOADING } from "../types/loaderTypes";

const loaderReducer = (state = null, action) => {
    switch (action.type) {
      case SET_LOADING:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default loaderReducer;