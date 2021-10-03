import { CHANGE_STATUS, GET_ALL } from "../types/likesType";

const likesReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return action.payload.status === 'destroy' ? [...state.filter(post => post !== action.payload.id)] : [...state, action.payload.id];
    case GET_ALL:
      return [...action.payload];
    default:
      return state;
  }
};

export default likesReducer;
