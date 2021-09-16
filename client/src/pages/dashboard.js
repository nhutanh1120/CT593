import React from "react";
import Sidebar from "./../components/dashboard/sidebar/sidebar";
import TopNavbar from "./../components/dashboard/navbar/navbar";
import Body from "./../components/dashboard/body/body";
// import ThemeMenu from "../components/dashboard/themeMenu";

function Dashboard() {
  return (
    <div className="App">
      <Sidebar />
      <section className="home-section">
        <TopNavbar />
        <Body />
      </section>
    </div>
  );
}

export default Dashboard;
