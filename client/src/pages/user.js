import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import TopNavbar from "./../components/layouts/dashboard/navbar/navbar";
import Sidebar from "./../components/layouts/dashboard/sidebar/sidebar";
import CopyRight from "./../components/layouts/copyright/copyright";
import Body from "../components/user";
import Detail from "./../components/user/detail/detail";
import "./../assets/css/dashboard.css";
import Setting from "../components/dashboard/setting/setting";
import NotFound from "./notfound";

const sidebarCurrent = [
  {
    link: "/user",
    icon: "bx bx-grid-alt",
    title: "Dashboard",
  },
  {
    link: "/user/setting",
    icon: "bx bx-cog",
    title: "Setting",
  },
];
function User() {
  const match = useRouteMatch();

  return (
    <div className="App">
      <Sidebar sidebarCurrent={sidebarCurrent} />
      <section className="home-section">
        <TopNavbar />

        <Switch>
          <Route exact path={match.url + "/"} component={Body}></Route>
          <Route
            exact
            path={match.url + "/detail/:id"}
            component={Detail}
          ></Route>
          <Route path={match.url + "/setting"} component={Setting}></Route>
          <Route path="*" component={NotFound} />
        </Switch>

        <CopyRight styles={true} />
      </section>
    </div>
  );
}

export default User;
