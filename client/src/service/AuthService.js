import $api from "../http";

const signIn = async (email, password) => {
  return $api.post("user/signin", { email, password });
};

const signUp = async (email, password, name) => {
  console.log({email, password, name});
  return $api.post("user/signup", { email, password, name });
};

const signOut = async () => {
  return $api.post("user/signout");
};

const AuthService = { signIn, signUp, signOut };

export default AuthService;
