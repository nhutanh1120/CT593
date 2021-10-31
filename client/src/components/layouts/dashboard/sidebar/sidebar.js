import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./logout/logout";
import "./sidebar.css";

const Sidebar = ({ sidebarCurrent }) => {
  const auth = useSelector((state) => state.auth);

  const { user, isLogged, isAdmin } = auth;

  useEffect(() => {
    let sidebar = document.querySelector(".dashboard--sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");

    const menuBtnChange = () => {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    };
    closeBtn.onclick = () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    };
    searchBtn.onclick = () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    };
  }, []);
  return (
    <div className="dashboard--sidebar">
      <div className="logo--details">
        <i className="bx bxl-c-plus-plus icon"></i>
        <div className="logo_name">Luu Moments</div>
        <i className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav--list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        {sidebarCurrent.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <i className={item.icon}></i>
              <span className="links_name">{item.title}</span>
            </Link>
            <span className="tooltip">{item.title}</span>
          </li>
        ))}

        {isLogged && (
          <Logout
            fullname="nhựt anh"
            permission={(isAdmin && "quản trị") || "người dùng"}
            avatar={user.avatar}
          />
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
