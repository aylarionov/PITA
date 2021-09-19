import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../redux/actions/userAC";
import Navbar from "../Navbar/Navbar";
import Icon from "../UI/Icons/Icon";
import header from "./header.module.css";

export default function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth);
  const isNotMain = useSelector((state) => state.isNotMain);

  return (
    <div className={header.container}>
      <Icon className={header.icon} />
      {isAuth && isNotMain && <Navbar />}
      <ul className={header.wrapper}>
        {isAuth ? (
          <Link
            key="/signout"
            onClick={() => dispatch(signOut())}
            className={header.link}
            to="/"
          >
            Выйти
          </Link>
        ) : (
          <>
            <Link key="/signin" className={header.link} to="/signin">
              Войти
            </Link>
            <Link key="/signup" className={header.link} to="/signup">
              Создать аккаунт
            </Link>
          </>
        )}
      </ul>
    </div>
  );
}
