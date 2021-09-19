import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authRouter } from "../../route";
import navbar from "./navbar.module.css";

const Navbar = () => {
  const { id } = useSelector((state) => state.user);

  return (
    <nav className={navbar.navItem}>
      {authRouter.map(
        (route) =>
          route.path[1] && (
            <Link
              key={route.path}
              className={navbar.navLink}
              to={route.path === "/tools/:id" ? `/tools/${id}` : route.path}
            >
              {route.path[1].toUpperCase()}
            </Link>
          )
      )}
    </nav>
  );
};

export default Navbar;
