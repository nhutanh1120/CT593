import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Email from "../components/dashboard/email";
import Setting from "../components/dashboard/setting/setting";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";
import "./../assets/css/dashboard.css";
import admin_menu from "./../assets/JsonData/admin_menu.json";
import customerList from "./../assets/JsonData/customers.json";
import Body from "./../components/dashboard/body/body";
import Customer from "./../components/dashboard/customer/customer";
import CopyRight from "./../components/layouts/copyright/copyright";
import TopNavbar from "./../components/layouts/dashboard/navbar/navbar";
import Sidebar from "./../components/layouts/dashboard/sidebar/sidebar";
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
    link: "/admin/dashboard/customer",
    icon: "bx bx-user",
    title: "Người dùng",
  },
  {
    link: "/admin/dashboard/message",
    icon: "bx bx-chat",
    title: "Tin nhắn",
  },
  // {
  //   link: "/",
  //   icon: "bx bx-pie-chart-alt-2",
  //   title: "Analytics",
  // },
  // {
  //   link: "/",
  //   icon: "bx bx-folder",
  //   title: "File Manager",
  // },
  // {
  //   link: "/",
  //   icon: "bx bx-cart-alt",
  //   title: "Order",
  // },
  // {
  //   link: "/admin/dashboard/email",
  //   icon: "bx bx-heart",
  //   title: "Saved",
  // },
  {
    link: "/admin/dashboard/email",
    icon: "bx bx-mail-send",
    title: "Saved",
  },
  {
    link: "/admin/dashboard/setting",
    icon: "bx bx-cog",
    title: "Cài đặt",
  },
];
function Dashboard() {
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
          <Route exact path={match.url + "/"} component={Body}></Route>
          <Route
            exact
            path={match.url + "/customer"}
            component={Customer}
          ></Route>
          <Route
            exact
            path={match.url + "/setting"}
            component={Setting}
          ></Route>
          <Route exact path={match.url + "/email"} component={Email}></Route>
          <Route path="*" component={NotFound} />
        </Switch>

        <CopyRight styles={true} />
      </section>
      <ScrollTop />
    </div>
  );
}

export default Dashboard;
