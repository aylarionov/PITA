import { SET_USER } from "../types/userTypes";
import AuthService from "../../service/AuthService";
import { setAuth } from "./authAC";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const signUp = (email, password, name) => async (dispatch) => {
  try {
    
    const res = await AuthService.signUp(email, password, name);
    
    localStorage.setItem("token", res.data.accessToken);

    dispatch(setAuth(true));
    dispatch(setUser(res.data.user));
    return ('ok')
  } catch (e) {
    return e.response?.data?.message;
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const res = await AuthService.signIn(email, password);
    localStorage.setItem("token", res.data.accessToken);

   
    dispatch(setAuth(true));
    dispatch(setUser(res.data.user));
    return ('ok')
  } catch (e) {
    return e.response?.data?.message;
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
