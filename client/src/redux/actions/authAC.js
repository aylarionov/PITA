import { CHANGE_AUTH } from "../types/authTypes";
import axios from "axios";
import { API_URL } from "../../http";
import { setUser } from "./userAC";
import { setLoading } from "./loaderAC";

export const setAuth = (bool) => ({
  type: CHANGE_AUTH,
  payload: bool,
});

export const checkAuth = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.get(`${API_URL}/user/refresh`, {
      withCredentials: true,
    });

    localStorage.setItem("token", res.data.accessToken);

    dispatch(setAuth(true));
    dispatch(setUser(res.data.user));
  } catch (e) {
    console.log(e.response?.data?.message);
  } finally {
    setTimeout(() => dispatch(setLoading(false)), 500);
  }
};
