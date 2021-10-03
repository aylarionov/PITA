import { MODAL_ACTIVE } from "../types/modalTypes";

const modalReducer = (state = false, action) => {
  switch (action.type) {
    case MODAL_ACTIVE:
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;
