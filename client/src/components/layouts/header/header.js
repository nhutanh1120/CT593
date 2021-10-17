import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../../assets/img/1.webp";
import Profile from "./profile";
import "./styles.css";

const sign = () => (
  <ul className="navbar--pc--list navbar--header--sign">
    <li>
      <NavLink className="navbar--pc--link" to="/sign">
        Đăng nhập
      </NavLink>
    </li>
    <li>
      <NavLink className="navbar--pc--link" to="/sign">
        Đăng ký
      </NavLink>
    </li>
  </ul>
);
function Header({ isActiveHeader }) {
  const isLogin = localStorage.getItem("firstLogin");
  let navbarStyle = "navbar";

  if (isActiveHeader) {
    navbarStyle += " isActiveHeader";
  } else {
    navbarStyle += " header";
  }

  const ref = useRef(null);
  const scroll = () => {
    let windowPosition = window.scrollY > 0;
    if (!ref?.current) return;
    ref.current.classList.toggle("navbar--scroll", windowPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <nav className={navbarStyle} ref={ref}>
      <div className="container">
        <Link className="navbar--logo" to="/">
          <div className="navbar--logo--content">
            <img src={logo} alt="logo" />
            <div className="logo--item">
              <h2>LUU MOMENTS</h2>
              <span>Agricultural</span>
            </div>
          </div>
        </Link>
        <div className="navbar--pc">
          <ul className="navbar--pc--list my-2 navbar--header-active">
            <li>
              <NavLink
                aria-current="page"
                className="navbar--pc--link"
                to="/"
                activeClassName="selected"
                exact
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar--pc--link"
                to="/about"
                activeClassName="selected"
                exact
              >
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar--pc--link"
                to="/post"
                activeClassName="selected"
                exact
              >
                Tin tức
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar--pc--link"
                to="/event"
                activeClassName="selected"
                exact
              >
                Sự kiện
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar--pc--link"
                to="/contact"
                activeClassName="selected"
                exact
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>

          {isLogin ? <Profile /> : sign()}
        </div>
        <label htmlFor="navbar__mobile--input" className="navbar--btn">
          <i className="bx bx-menu bx-md"></i>
        </label>
        <input
          type="checkbox"
          className="navbar__input"
          id="navbar__mobile--input"
        />
        <label
          htmlFor="navbar__mobile--input"
          className="navbar__overlay"
        ></label>
        <div className="navbar__mobile">
          <ul className="navbar__mobile--list">
            <li className="navbar__mobile--item">
              <NavLink
                className="nav__mobile--link"
                to="/"
                activeClassName="isActiveMobile"
                exact
              >
                <i className="bx bx-home"></i>
                <span>Trang chủ</span>
              </NavLink>
            </li>
            <li className="navbar__mobile--item">
              <NavLink
                className="nav__mobile--link"
                to="/about"
                activeClassName="isActiveMobile"
                exact
              >
                <i className="bx bx-info-circle"></i>
                <span>Giới thiệu</span>
              </NavLink>
            </li>
            <li className="navbar__mobile--item">
              <NavLink
                className="nav__mobile--link"
                to="/post"
                activeClassName="isActiveMobile"
                exact
              >
                <i className="bx bx-news"></i>
                <span>Tin tức</span>
              </NavLink>
            </li>
            <li className="navbar__mobile--item">
              <NavLink
                className="nav__mobile--link"
                to="/event"
                activeClassName="isActiveMobile"
                exact
              >
                <i className="bx bx-calendar-event"></i>
                <span>Sự kiện</span>
              </NavLink>
            </li>
            <li className="navbar__mobile--item">
              <NavLink
                className="nav__mobile--link"
                to="/contact"
                activeClassName="isActiveMobile"
                exact
              >
                <i className="bx bxs-contact"></i>
                <span>Liên hệ</span>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar__mobile--sign">
            <li className="navbar__mobile--item">
              <Link className="nav__mobile--link" to="/sign">
                <i className="bx bx-log-in"></i>
                <span>Đăng nhập</span>
              </Link>
            </li>
            <li className="navbar__mobile--item">
              <Link className="nav__mobile--link" to="/sign">
                <i className="bx bx-add-to-queue"></i>
                <span>Đăng ký</span>
              </Link>
            </li>
          </ul>
          <label
            htmlFor="navbar__mobile--input"
            className="navbar__mobile--close"
          >
            <i className="bx bx-x bx-md"></i>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Header;
