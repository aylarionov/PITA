import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

import auth from "./auth.module.css";

const Auth = () => {
  return (
    <div className={auth.container}>
      <LoginForm />
    </div>
  );
};

export default Auth;
