import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../../redux/actions/userAC";
import Navbar from "../Navbar/Navbar";
import Icon from "../UI/Icon/Icon";
import home from "../../icons/home.svg";

import header from "./header.module.css";

export default function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth);
  const isNotMain = useSelector((state) => state.isNotMain);
  const router = useHistory();

    const handler = () => {
        router.push("/");
    }

  return (
    <div className={header.container}>
      <Icon handler={handler} className={header.icon} src={home} />
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
