import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Email from "../components/dashboard/email";
import ScrollTop from "./../components/layouts/scrollTop/scrollTop";
import Posts from "./../components/share/post";
import Setting from "./../components/share/setting/setting";
import "./../assets/css/dashboard.css";
import admin_menu from "./../assets/JsonData/admin_menu.json";
import customerList from "./../assets/JsonData/customers.json";
import Customer from "./../components/dashboard/customer/customer";
import Body from "./../components/dashboard/index";
import CopyRight from "./../components/layouts/copyright/copyright";
import TopNavbar from "./../components/layouts/dashboard/navbar/navbar";
import Sidebar from "./../components/layouts/dashboard/sidebar/sidebar";
import NotFound from "./notfound";
import Message from "./../components/dashboard/message/";
import Product from "./../components/dashboard/product";

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
    link: "/admin/dashboard/product",
    icon: "bx bx-basket",
    title: "Sản phẩm",
  },
  {
    link: "/admin/dashboard/message",
    icon: "bx bx-chat",
    title: "Tin nhắn",
  },
  {
    link: "/admin/dashboard/post",
    icon: "bx bx-message-square-edit",
    title: "Tin tức",
  },
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
            path={match.url + "/product"}
            component={Product}
          ></Route>
          <Route
            exact
            path={match.url + "/message"}
            component={Message}
          ></Route>
          <Route exact path={match.url + "/post"} component={Posts}></Route>
          <Route exact path={match.url + "/email"} component={Email}></Route>
          <Route
            exact
            path={match.url + "/setting"}
            component={Setting}
          ></Route>
          <Route path="*" component={NotFound} />
        </Switch>

        <CopyRight styles={true} />
      </section>
      <ScrollTop />
    </div>
  );
}

export default Dashboard;
