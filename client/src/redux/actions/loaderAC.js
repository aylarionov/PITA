import { SET_LOADING } from "../types/loaderTypes";

export const setLoading = (bool) => ({
  type: SET_LOADING,
  payload: bool,
});