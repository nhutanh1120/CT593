import React from "react";
import Sidebar from "./../components/dashboard/sidebar/sidebar";
import CustomerBody from "../components/dashboard/body/customer/customer";
// import ThemeMenu from "../components/dashboard/themeMenu";
// import customerList from "../assets/JsonData/customers.json";

function Customer() {
  return (
    <div className="App">
      <Sidebar />
      <CustomerBody />
    </div>
  );
}

export default Customer;
