import React from "react";
import { Link } from "react-router-dom";
import CopyRight from "../copyright/copyright";
import "./styles.css";

const itemSocial = [
  {
    class: "footer__contact",
    link: "tel:0399234016",
    icon: "bx bxs-phone",
  },
  {
    class: "footer__contact",
    link: "https://www.facebook.com/",
    icon: "bx bxl-facebook",
  },
  {
    class: "footer__contact",
    link: "https://instagram.com",
    icon: "bx bxl-instagram",
  },
  {
    class: "footer__contact",
    link: "https://twitter.com/",
    icon: "bx bxl-twitter",
  },
];

const iconSocial = (item, index) => (
  <span className={item.class} key={index}>
    <Link to={item.link}>
      <i className={item.icon}></i>
    </Link>
  </span>
);

function Footer() {
  return (
    <footer>
      <div className="grid wide footer">
        <div className="row">
          <div className="col l-3">
            <div className="footer__header">THÔNG TIN VỀ CHÚNG TÔI</div>
            <div className="footer__text">
              Truy xuất nguồn gốc sản phẩm là một giải pháp cho người dùng truy
              xuất, tìm hiểu về thông tin nguồn gốc xuất xứ của sản phẩm
            </div>
          </div>
          <div className="col l-3">
            <div className="footer__header">HỔ TRỢ KHÁCH HÀNG</div>
            <div className="footer__text">
              <Link to="tel:0399234016" title="Hotline">
                Hotline: <span>0399234016</span>
              </Link>
            </div>
            <div className="footer__text">
              <Link to="mailto:ltanhutd20086@cusc.ctu.edu.vn">
                Email:
                <span>ltanhutd20086@cusc.ctu.edu.vn</span>
              </Link>
            </div>
            <div className="footer__header">THEO DÕI FANPAGE</div>
            <div className="footer__text">
              <Link to="https://www.facebook.com/">
                <i className="bx bxl-facebook"></i>
                <span>&nbsp;Facebook</span>
              </Link>
            </div>
            <div className="footer__text">
              <Link to="https://instagram.com">
                <i className="bx bxl-instagram"></i>
                <span>&nbsp;Instagram</span>
              </Link>
            </div>
          </div>
          <div className="col l-3">
            <div className="footer__header">CHÍNH SÁCH KHÁCH HÀNG</div>
            <div className="footer__text">
              <ul>
                <li>
                  <i className="bx bx-label"></i>
                  &nbsp;
                  <span>
                    <Link to="/">Chính sách đổi trả</Link>
                  </span>
                </li>
                <li>
                  <i className="bx bx-label"></i>
                  &nbsp;
                  <span>
                    <Link to="/">Chính sách vận chuyển</Link>
                  </span>
                </li>
                <li>
                  <i className="bx bx-label"></i>
                  &nbsp;
                  <span>
                    <Link to="/">Chăm sóc khách hàng</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col l-3">
            <div className="footer__header">LIÊN HỆ CHÚNG TÔI</div>
            <div className="footer__body">
              {itemSocial.map((item, index) => iconSocial(item, index))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright  */}
      <CopyRight />
    </footer>
  );
}

export default Footer;
