import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { signIn, signUp } from "../redux/actions/userAC";
import { useInput } from "./useInput";

export const useLogin = () => {
  const name = useInput("", { isEmpty: true, minLength: 3, maxLength: 20 });
  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 4, maxLength: 36 });

  const dispatch = useDispatch();
  const router = useHistory();

  const signup = useLocation().pathname === "/signup";

  const handler = (email, password, name) => {
    if (signup) {
      dispatch(signUp(email, password, name));
      router.push("/");
    } else {
      dispatch(signIn(email, password));
      router.push("/");
    }
  };

  return {
    name,
    email,
    password,
    signup,
    handler,
  };
};
