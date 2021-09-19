import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";

import app from "./app.module.css";
import AppRouter from "./components/AppRouter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/actions/authAC";
import Loaders from "./components/UI/Loader/Loader";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <div className={app.container}>
      <Router>
        <Header />
        {isLoading ? <Loaders /> : <AppRouter />}
      </Router>
    </div>
  );
}

export default App;
