import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { Squares } from "../stylesComponents/Squares";
import Button from "../UI/Button/Button";
import Error from "../UI/Error/Error";
import Input from "../UI/Input/Input";
import login from "./login.module.css";

const LoginForm = () => {
  const { name, email, password, signup, handler } = useLogin();
  
  return (
    <div className={login.box}>
      <Squares />
      <div className={login.container}>
        <h2 className={login.title}>
          {signup ? "Регистрация" : "Авторизация"}
        </h2>
        <div className={login.form}>
          {signup && (
            <>
              {name.isDirty && <Error type="name" errors={name.errors} />}
              <Input
                onBlur={(e) => name.onBlur(e)}
                onChange={(e) => name.onChange(e)}
                value={name.value}
                placeholder="Name"
                autocomplete="off"
                name="name"
              />
            </>
          )}
          {email.isDirty && <Error type="email" errors={email.errors} />}
          <Input
            onBlur={(e) => email.onBlur(e)}
            onChange={(e) => email.onChange(e)}
            value={email.value}
            placeholder="Email"
            autocomplete="off"
            type="email"
            name="email"
          />
          {password.isDirty && (
            <Error type="password" errors={password.errors} />
          )}
          <Input
            onBlur={(e) => password.onBlur(e)}
            onChange={(e) => password.onChange(e)}
            value={password.value}
            type="password"
            autocomplete="off"
            placeholder="Password"
            name="password"
          />
          <div className={login.button}>
            {signup ? (
              <Button
                disabled={
                  !name.inputValid || !email.inputValid || !password.inputValid
                }
                onClick={() => handler(email.value, password.value, name.value)}
              >
                Создать аккаунт
              </Button>
            ) : (
              <Button
                disabled={!email.inputValid || !password.inputValid}
                onClick={() => handler(email.value, password.value)}
              >
                Войти
              </Button>
            )}
          </div>
        </div>
        <span className={login.text}>или</span>
        {signup ? (
          <p className={login.text}>
            Уже есть аккаунт?{" "}
            <Link className={login.link} to="/signin">
              Войти
            </Link>
          </p>
        ) : (
          <p className={login.text}>
            <Link className={login.link} to="/signup">
              Создать аккаунт
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
