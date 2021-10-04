import React from "react";
import Sidebar from "./../components/dashboard/sidebar/sidebar";
import Profile from "./../components/dashboard/profile/profile";
import TopNavbar from "./../components/dashboard/navbar/navbar";
import ScrollTop from "./../components/scrollTop/scrollTop";
import Permission from "./../components/dashboard/profile/permission/permission";
import "./../assets/css/dashboard.css";

const sidebarCurrent = [
  {
    link: "/dashboard",
    icon: "bx bx-grid-alt",
    title: "Dashboard",
  },
  {
    link: "/dashboard/customer",
    icon: "bx bx-user",
    title: "User",
  },
  {
    link: "/dashboard/message",
    icon: "bx bx-chat",
    title: "Messages",
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
    link: "/",
    icon: "bx bx-heart",
    title: "Saved",
  },
  {
    link: "/dashboard/setting",
    icon: "bx bx-cog",
    title: "Setting",
  },
];
function Setting() {
  return (
    <div className="App">
      <Sidebar sidebarCurrent={sidebarCurrent} />
      <section className="home-section">
        <TopNavbar />
        <div className="grid body">
          <div className="dashboard__body__header">
            <h2>Quản lý người dùng</h2>
          </div>
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
