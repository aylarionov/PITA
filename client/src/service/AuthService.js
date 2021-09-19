import $api from "../http";

const signIn = async (email, password) => {
  return $api.post("/signin", { email, password });
};

const signUp = async (name, email, password) => {
  return $api.post("/signup", { name, email, password });
};

const signOut = async () => {
  return $api.post("/signout");
};

const AuthService = { signIn, signUp, signOut };

export default AuthService;
