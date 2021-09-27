import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { signIn, signUp } from "../redux/actions/userAC";
import { useInput } from "./useInput";

export const useLogin = () => {
  const name = useInput("", { isEmpty: true, minLength: 3, maxLength: 20 });
  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 4, maxLength: 36 });
  const [userError, setUserError] = useState("");

  const dispatch = useDispatch();
  const router = useHistory();

  const signup = useLocation().pathname === "/signup";

  const handler = async (email, password, name) => {
    if (signup) {
      const res = await dispatch(signUp(email, password, name));

      if (res === "ok") {
        router.push("/");
      } else {
        setUserError(res);
      }
    } else {
      const res = await dispatch(signIn(email, password));

      if (res === "ok") {
        router.push("/");
      } else {
        setUserError(res);
      }
    }
  };

  return {
    name,
    email,
    password,
    signup,
    handler,
    userError,
  };
};
