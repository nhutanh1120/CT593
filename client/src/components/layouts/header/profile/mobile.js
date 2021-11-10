import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout } from "../../dashboard/sidebar/logout/handleLogout";
import profile from "./../../../../assets/img/profile.jpg";
import "./mobile.css";

const Mobile = () => {
  const auth = useSelector((state) => state.auth);
  const { isAdmin, user } = auth;
  const [fullName, setFullName] = useState(false);
  useEffect(() => {
    if (user.forename && user.surname)
      setFullName(user.forename + " " + user.surname);
  }, [user.forename, user.surname]);
  return (
    <>
      <div className="sign__images__header">
        <img
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = profile;
          }}
          src={user.avatar || "avatar"}
          alt="img"
        />
        <p>{fullName || "Chưa cập nhật"}</p>
        <small>{"@" + user.email || "@luumoments@gmail.com"}</small>
      </div>
      <ul className="navbar__mobile--sign border__sign">
        <li className="navbar__mobile--item">
          <Link
            className="nav__mobile--link"
            to={isAdmin ? "/admin/dashboard" : "/user/dashboard"}
          >
            <i className={isAdmin ? "bx bx-log-in" : "bx bx-edit"}></i>
            <span>{isAdmin ? "Quản trị hệ thống" : "Sản phẩm của tôi"}</span>
          </Link>
        </li>
        <li className="navbar__mobile--item">
          <Link
            className="nav__mobile--link"
            to={
              isAdmin ? "/admin/dashboard/setting" : "/user/dashboard/setting"
            }
          >
            <i className={isAdmin ? "bx bx-add-to-queue" : "bx bx-cog"}></i>
            <span>Cài đặt</span>
          </Link>
        </li>
        <li className="navbar__mobile--item">
          <Link className="nav__mobile--link" to="/" onClick={handleLogout}>
            <i className="bx bx-log-out-circle"></i>
            <span>Đăng suất</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Mobile;
