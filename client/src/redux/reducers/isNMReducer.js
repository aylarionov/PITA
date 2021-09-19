import { CHANGE_ISNM } from "../types/isNMTypes";


const isNMReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_ISNM:
      return action.payload;
    default:
      return state;
  }
};

export default isNMReducer;