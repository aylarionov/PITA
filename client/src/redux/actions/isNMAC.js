import { CHANGE_ISNM } from "../types/isNMTypes";

export const setIsNotMain = (bool) => ({
  type: CHANGE_ISNM,
  payload: bool,
});
