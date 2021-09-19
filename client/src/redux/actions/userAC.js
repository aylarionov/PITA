import { SET_USER } from "../types/userTypes";
import AuthService from "../../service/AuthService";
import { setAuth } from "./authAC";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const signUp = (name, email, password) => async (dispatch) => {
  try {
    const res = await AuthService.signUp(name, email, password);
    
    localStorage.setItem("token", res.data.accessToken);

    dispatch(setAuth(true));
    dispatch(setUser(res.data.user));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const res = await AuthService.signIn(email, password);
    localStorage.setItem("token", res.data.accessToken);

   
    dispatch(setAuth(true));
    dispatch(setUser(res.data.user));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await AuthService.signOut();
    localStorage.removeItem("token");

    dispatch(setAuth(false));
    dispatch(setUser({}));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};
