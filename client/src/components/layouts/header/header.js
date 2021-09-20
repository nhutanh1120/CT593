import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
import "./styles.css";
import logo from "./../../../assets/img/1.webp";

function Header({ isActiveHeader }) {
  let navbarStyle = "navbar";

  if (isActiveHeader) {
    navbarStyle += " isActiveHeader";
  } else {
    navbarStyle += " header";
  }

  const ref = useRef(null);
  const scroll = () => {
    let windowPosition = window.scrollY > 0;
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
        </div>
        <label htmlFor="navbar__mobile--input" className="navbar--btn">
          XV
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
              <NavLink className="nav__mobile--link" to="/">
                Trang chủ
              </NavLink>
            </li>
            <li className="navbar__mobile--item">
              <NavLink className="nav__mobile--link" to="/about">
                Giới thiệu
              </NavLink>
            </li>
            <li className="navbar__mobile--item">
              <NavLink className="nav__mobile--link" to="/post">
                Tin tức
              </NavLink>
            </li>
            <li className="navbar__mobile--item">
              <NavLink className="nav__mobile--link" to="/event">
                Sự kiện
              </NavLink>
            </li>
            <li className="navbar__mobile--item">
              <NavLink className="nav__mobile--link" to="/contact">
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <ul className="navbar__mobile--sign">
            <li className="navbar__mobile--item">
              <Link className="nav__mobile--link" to="/sign">
                Đăng nhập
              </Link>
            </li>
            <li className="navbar__mobile--item">
              <Link className="nav__mobile--link" to="/sign">
                Đăng ký
              </Link>
            </li>
          </ul>
          <label
            htmlFor="navbar__mobile--input"
            className="navbar__mobile--close"
          >
            X
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Header;
