import React from "react";
import Sidebar from "./../components/dashboard/sidebar/sidebar";
import Body from "./../components/user/body";

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
  return (
    <div className="App">
      <Sidebar sidebarCurrent={sidebarCurrent} />
      <Body />
    </div>
  );
}

export default User;
