import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRouter, publicRouter } from "../route";
import { MAIN_ROUTE, PAIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.isAuth);

  return isAuth ? (
    <Switch>
      {authRouter.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      {/* <Redirect to={PAIN_ROUTE} /> */}
    </Switch>
  ) : (
    <Switch>
      {publicRouter.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
