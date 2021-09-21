import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./sidebar.css";

const Sidebar = () => {
  const auth = useSelector((state) => state.auth);

  const { isLogged } = auth;
  // const { user, isLogged } = auth;

  // console.log(user);

  const checkLogin = () => {
    <li className="profile">
      <div className="profile-details">
        <img src="profile.jpg" alt="profileImg" />
        <div className="name_job">
          <div className="name">Prem Shahi</div>
          <div className="job">admin</div>
        </div>
      </div>
      <i className="bx bx-log-out" id="log_out"></i>
    </li>;
  };
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
    <>
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
          <li>
            <Link to="/dashboard">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <Link to="/dashboard/customer">
              <i className="bx bx-user"></i>
              <span className="links_name">User</span>
            </Link>
            <span className="tooltip">User</span>
          </li>
          <li>
            <Link to="/dashboard/message">
              <i className="bx bx-chat"></i>
              <span className="links_name">Messages</span>
            </Link>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <Link to="/">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Analytics</span>
            </Link>
            <span className="tooltip">Analytics</span>
          </li>
          <li>
            <Link to="/">
              <i className="bx bx-folder"></i>
              <span className="links_name">File Manager</span>
            </Link>
            <span className="tooltip">Files</span>
          </li>
          <li>
            <Link to="/">
              <i className="bx bx-cart-alt"></i>
              <span className="links_name">Order</span>
            </Link>
            <span className="tooltip">Order</span>
          </li>
          <li>
            <Link to="/">
              <i className="bx bx-heart"></i>
              <span className="links_name">Saved</span>
            </Link>
            <span className="tooltip">Saved</span>
          </li>
          <li>
            <Link to="/dashboard/setting">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </Link>
            <span className="tooltip">Setting</span>
          </li>
          {isLogged ? checkLogin : ""}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
