import { MODAL_ACTIVE } from "../types/modalTypes";

export const setModalActive = (bool) => ({
  type: MODAL_ACTIVE,
  payload: bool,
});
