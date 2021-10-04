import React from "react";
import Sidebar from "./../components/dashboard/sidebar/sidebar";
import Body from "./../components/dashboard/body/body";
// import ThemeMenu from "./../components/dashboard/themeMenu";

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
function Dashboard() {
  return (
    <div className="App">
      <Sidebar sidebarCurrent={sidebarCurrent} />
      <Body />
    </div>
  );
}

export default Dashboard;
