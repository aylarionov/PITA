import { ADD_POST, GET_PUBLIC_POST } from "../types/postsType";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case GET_PUBLIC_POST:
      return [...action.payload];
    default:
      return state;
  }
};

export default postsReducer;
