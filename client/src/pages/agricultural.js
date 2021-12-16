import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";
import "./../assets/css/agricultural.css";
import AgriculturalContent from "./../components/agricultural/";
import CreateDistributor from "./../components/agricultural/distributor/create/create";
import AgriculturalManager from "./../components/agricultural/manager";
import CreateProcessing from "./../components/agricultural/processing/create/create";
import CreateRetailer from "./../components/agricultural/retailer/create/create";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";

const Agricultural = () => {
  const match = useRouteMatch();
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path={match.url + "/:id"}
          component={AgriculturalContent}
        ></Route>
        <Route
          exact
          path={match.url + "/manager/:id"}
          component={AgriculturalManager}
        ></Route>
        <Route
          exact
          path={match.url + "/:id/processing"}
          component={CreateProcessing}
        ></Route>
        <Route
          exact
          path={match.url + "/:id/distributor"}
          component={CreateDistributor}
        ></Route>{" "}
        <Route
          exact
          path={match.url + "/:id/retailer"}
          component={CreateRetailer}
        ></Route>
      </Switch>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Agricultural;
