import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Email from "../components/dashboard/email";
import Setting from "../components/dashboard/setting/setting";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";
import "./../assets/css/dashboard.css";
import customerList from "./../assets/JsonData/customers.json";
import Body from "./../components/dashboard/body/body";
import Customer from "./../components/dashboard/customer/customer";
import CopyRight from "./../components/layouts/copyright/copyright";
import TopNavbar from "./../components/layouts/dashboard/navbar/navbar";
import Sidebar from "./../components/layouts/dashboard/sidebar/sidebar";
import NotFound from "./notfound";

const sidebarCurrent = [
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
  {
    link: "/",
    icon: "bx bx-pie-chart-alt-2",
    title: "Analytics",
  },
  {
    link: "/",
    icon: "bx bx-folder",
    title: "File Manager",
  },
  {
    link: "/",
    icon: "bx bx-cart-alt",
    title: "Order",
  },
  {
    link: "/admin/dashboard/email",
    icon: "bx bx-heart",
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
  return (
    <div className="App">
      <Sidebar sidebarCurrent={sidebarCurrent} />
      <section className="home-section">
        <TopNavbar data={customerList} />

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
