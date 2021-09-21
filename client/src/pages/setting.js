import React from "react";
import Sidebar from "../components/dashboard/sidebar/sidebar";
import Profile from "../components/dashboard/profile/profile";
import TopNavbar from "../components/dashboard/navbar/navbar";
import ScrollTop from "../components/scrollTop/scrollTop";
import Permission from "../components/dashboard/profile/permission/permission";

function Setting() {
  return (
    <div className="App">
      <Sidebar />
      <section className="home-section">
        <TopNavbar />
        <div className="grid body">
          <h2 className="dashboard--body">Quản lý người dùng</h2>
          <div className="row">
            <div className="col l-3">{<Permission />}</div>
            <div className="col l-8">{<Profile />}</div>
          </div>
        </div>
      </section>

      <ScrollTop />
    </div>
  );
}

export default Setting;
