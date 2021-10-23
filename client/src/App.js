import axios from "axios";
import "boxicons/css/boxicons.min.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/font/css2.css";
import ActivationEmail from "./components/auth/ActivationEmail";
import { apiUrl } from "./constants/";
import About from "./pages/about";
import Agricultural from "./pages/agricultural";
import Auth from "./pages/auth";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Events from "./pages/events";
import ForgotPassword from "./pages/forgotPassword";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Post from "./pages/post";
import QrCode from "./pages/qrCode";
import Test from "./pages/test";
import User from "./pages/user";
import {
  dispatchGetUser,
  dispatchLogin,
  fetchUser,
} from "./redux/actions/authAction";

function App() {
  const isLogin = localStorage.getItem("firstLogin");
  const auth = useSelector((state) => state.auth);
  // const { isLogged, isAdmin } = auth;

  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.get(apiUrl + "/auth/refresh", {
          withCredentials: true,
        });
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <Route path="/event" component={Events} />
        <Route path="/contact" component={Contact} />
        <Route path="/sign" component={Auth} />
        <Route
          exact
          path="/api/auth/activation/:activation_token"
          component={ActivationEmail}
        />
        <Route path="/forgot" component={ForgotPassword} />
        {/* <Route path="/admin/dashboard" component={Dashboard} /> */}
        <Route
          path="/admin/dashboard"
          component={isLogin ? Dashboard : NotFound}
        />
        <Route path="/user/dashboard" component={isLogin ? User : NotFound} />
        <Route path="/qr/:id" component={QrCode} />
        <Route path="/agricultural/:id" component={Agricultural} />
        <Route path="/test" component={Test} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
