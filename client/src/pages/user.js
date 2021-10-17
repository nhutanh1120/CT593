import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Setting from "../components/dashboard/setting/setting";
import Body from "../components/user";
import "./../assets/css/dashboard.css";
import CopyRight from "./../components/layouts/copyright/copyright";
import TopNavbar from "./../components/layouts/dashboard/navbar/navbar";
import Sidebar from "./../components/layouts/dashboard/sidebar/sidebar";
import Detail from "./../components/user/detail/detail";
import NotFound from "./notfound";

const sidebarCurrent = [
  {
    link: "/",
    icon: "bx bx-home",
    title: "Trang chủ",
  },
  {
    link: "/user/dashboard",
    icon: "bx bx-grid-alt",
    title: "Bảng điều khiển",
  },
  {
    link: "/user/dashboard/setting",
    icon: "bx bx-cog",
    title: "Cài đặt",
  },
];
function User() {
  const match = useRouteMatch();
  const auth = useSelector((state) => state.auth);
  const { isLogged, isAdmin } = auth;

  const history = useHistory();

  useEffect(() => {
    if (!isLogged || isAdmin) {
      history.push("/");
    }
  }, [isLogged, isAdmin, history]);

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
