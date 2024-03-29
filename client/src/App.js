import axios from "axios";
import "boxicons/css/boxicons.min.css";
import "moment/locale/vi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Web3 from "web3";
import "./App.css";
import "./assets/css/form.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
// import "./assets/font/css2.css";
import ActivationEmail from "./components/auth/ActivationEmail";
import Marquee from "./components/utils/marquee";
import { apiUrl } from "./constants/";
import { ABI, ADDRESS_SMART_CONTRACT } from "./constants/contract";
import About from "./pages/about";
import Agricultural from "./pages/agricultural";
import Auth from "./pages/auth";
import Blockchain from "./pages/blockchain";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import ForgotPassword from "./pages/forgotPassword";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Post from "./pages/post";
import Product from "./pages/product";
import Info from "./pages/profile";
import QrCode from "./pages/qrCode";
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
    if (isLogin) {
      const getToken = async () => {
        const res = await axios.get(apiUrl + "/auth/refresh", {
          withCredentials: true,
        });
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
      /**
       * Get token after 13m
       */
      setInterval(() => getToken(), 13 * 60 * 1000); // 13 * 60 * 1000
    }
  }, [auth.isLogged, isLogin, dispatch]);

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

  const [marquee, setMarquee] = useState(false);
  useEffect(() => {
    if (marquee) {
      setTimeout(function () {
        setMarquee(false);
      }, 15000);
    }
  }, [marquee]);
  //create contract infura
  const provider_Infura = new Web3.providers.WebsocketProvider(
    "wss://rinkeby.infura.io/ws/v3/ae82f11804ff4cd58a7ef8bb0ebe4f42"
  );
  const web3_infura = new Web3(provider_Infura);
  const contract_Infura = new web3_infura.eth.Contract(
    ABI,
    ADDRESS_SMART_CONTRACT
  );
  // console.log(contract_Infura);
  contract_Infura.events.sendStatus(
    { filter: {}, fromBlock: "latest" },
    function (error, event) {
      if (error) {
        console.log(error);
      } else {
        console.log(event);
        setMarquee(event?.transactionHash);
      }
    }
  );
  return (
    <>
      {marquee && <Marquee title={marquee} />}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post" component={Post} />
          <Route path="/product" component={Product} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign" component={Auth} />
          <Route
            exact
            path="/api/auth/activation/:activation_token"
            component={ActivationEmail}
          />
          <Route path="/forgot" component={ForgotPassword} />
          <Route
            path="/admin/dashboard"
            component={isLogin ? Dashboard : NotFound}
          />
          <Route
            path="/manager/blockchain"
            component={isLogin ? Blockchain : NotFound}
          />
          <Route path="/user/dashboard" component={isLogin ? User : NotFound} />
          <Route path="/qr/:id" component={QrCode} />
          <Route path="/agricultural" component={Agricultural} />
          <Route path="/profile/update" component={isLogin ? Info : NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
