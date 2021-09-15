import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
import "./styles.css";
import logo from "./../../../assets/img/1.webp";

function Header({ classNav }) {
  let navCss = "navbar navbar-expand-lg navbar-dark";

  const scroll = () => {
    const header = document.querySelector("nav");
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("nav-bar-scroll", windowPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  if (classNav) {
    navCss += " header-home";
  } else {
    navCss += " header";
  }
  return (
    <nav className={navCss}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="header-logo">
            <img src={logo} alt="logo" />
            <div className="logo-item">
              <h2 className="mb-0">LUU MOMENTS</h2>
              <span>Agricultural</span>
            </div>
          </div>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto my-2 mb-lg-0 header-active">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/"
                activeClassName="selected"
                exact
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/about"
                activeClassName="selected"
                exact
              >
                Giới thiệu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/post"
                activeClassName="selected"
                exact
              >
                Tin tức
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/event"
                activeClassName="selected"
                exact
              >
                Sự kiện
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/contact"
                activeClassName="selected"
                exact
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto my-2 mb-lg-0 header__sign">
            <li className="nav-item">
              <Link className="nav-link active" to="/sign">
                Đăng nhập
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sign">
                Đăng ký
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
