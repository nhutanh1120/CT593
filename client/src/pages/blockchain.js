import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Censor from "../components/blockchain";
import Ethereum from "../components/blockchain/ethereum";
// import "./../assets/css/dashboard.css";
import admin_menu from "./../assets/JsonData/admin_menu.json";
import customerList from "./../assets/JsonData/customers.json";
import CopyRight from "./../components/layouts/copyright/copyright";
import TopNavbar from "./../components/layouts/dashboard/navbar/navbar";
import Sidebar from "./../components/layouts/dashboard/sidebar/sidebar";
import ScrollTop from "./../components/layouts/scrollTop/scrollTop";
import NotFound from "./notfound";

const sidebarCurrent = [
  {
    link: "/",
    icon: "bx bx-home",
    title: "Trang chủ",
  },
  {
    link: "/admin/dashboard",
    icon: "bx bx-grid-alt",
    title: "Bảng điều khiển",
  },
  {
    link: "/manager/blockchain",
    icon: "bx bx-basket",
    title: "Nông sản",
  },
  {
    link: "/manager/blockchain/ethereum",
    icon: "bx bx-data",
    title: "Blockchain",
  },
];
function Blockchain() {
  const match = useRouteMatch();
  const auth = useSelector((state) => state.auth);
  const { isLogged, isAdmin } = auth;
  const history = useHistory();
  useEffect(() => {
    if (!isLogged || !isAdmin) {
      history.push("/");
    }
  }, [isLogged, isAdmin, history]);

  return (
    <div className="App">
      <Sidebar sidebarCurrent={sidebarCurrent} />
      <section className="home-section">
        <TopNavbar data={customerList} userMenu={admin_menu} />

        <Switch>
          <Route exact path={match.url + "/"} component={Censor}></Route>
          <Route
            exact
            path={match.url + "/ethereum"}
            component={Ethereum}
          ></Route>
          <Route path="*" component={NotFound} />
        </Switch>

        <CopyRight styles={true} />
      </section>
      <ScrollTop />
    </div>
  );
}

export default Blockchain;
