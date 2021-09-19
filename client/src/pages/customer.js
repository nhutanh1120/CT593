import React from "react";
import Sidebar from "./../components/dashboard/sidebar/sidebar";
import CustomerBody from "../components/dashboard/body/customer/customer";
// import ThemeMenu from "../components/dashboard/themeMenu";
// import customerList from "../assets/JsonData/customers.json";
import ScrollTop from "../components/scrollTop/scrollTop";

function Customer() {
  return (
    <div className="App">
      <Sidebar />
      <CustomerBody />
      <ScrollTop />
    </div>
  );
}

export default Customer;
