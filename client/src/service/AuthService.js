import $api from "../http";

const signIn = async (email, password) => {
  return $api.post("user/signin", { data: { email, password } });
};

const signUp = async (email, password, name) => {
  return $api.post("user/signup", { data: { email, password, name } });
};

const signOut = async () => {
  return $api.post("user/signout");
};

const AuthService = { signIn, signUp, signOut };

export default AuthService;
