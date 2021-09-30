import React from "react";
import Sidebar from "./../components/dashboard/sidebar/sidebar";
import Body from "./../components/dashboard/body/body";
// import ThemeMenu from "./../components/dashboard/themeMenu";

function Dashboard() {
  return (
    <div className="App">
      <Sidebar />
      <Body />
    </div>
  );
}

export default Dashboard;
