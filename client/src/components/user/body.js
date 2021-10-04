import React, { useRef } from "react";
import { Link } from "react-router-dom";
import img from "./../../assets/img/bg.jpg";
import "./../dashboard/body/body.css";
import TopNavbar from "./../dashboard/navbar/navbar";
import CopyRight from "./../layouts/copyright/copyright";
import "./../../assets/css/dashboard.css";
import "./body.css";

const Body = () => {
  const ref = useRef(null);
  const handleClick = (e) => {
    const content__current = e.target.nextSibling;
    if (!content__current) return;
    content__current.classList.toggle("active--dropdown");
    ref.current.style.display = "block";
  };
  const closeElement = (e) => {
    const closeElements = document.querySelectorAll(".active--dropdown");
    if (!closeElements) return;
    closeElements.forEach((element) => {
      element.classList.remove("active--dropdown");
    });
    e.target.style.display = "none";
  };

  return (
    <section className="home-section">
      <TopNavbar />
      <div className="grid body">
        <div className="dashboard__body__header">
          <h2>Sản phẩm</h2>
          <button className="btn">
            <i className="bx bx-plus-circle bx-sm bx-spin-hover"></i>&nbsp;Thêm
            mới
          </button>
        </div>
        <div className="div__hidden" onClick={closeElement} ref={ref}></div>
        <div className="row product__user">
          <div className="col l-3 m-6 c-12">
            <div className="product__card">
              <div className="product__header">
                <div className="product__header__img">
                  <img src={img} alt="img" />
                </div>
                <div className="product__header__content">
                  <h5>luu moments</h5>
                  <span>ID ứng dụng: </span>
                  <span>Loại: Nông sản</span>
                </div>
              </div>
              <div className="product__footer">
                <div className="product__footer--head">
                  <i className="bx bx-bookmark-heart bx-sm"></i>&nbsp;Quản trị
                  viên
                </div>
                <div className="product__footer--end">
                  <div
                    className="product__footer--notification"
                    onClick={handleClick}
                  >
                    <i className="bx bx-bell bx-sm"></i>
                    <div className="product__dropdown__content product--width">
                      <Link to="/" className="product--a">
                        a
                      </Link>
                      <Link to="/" className="product--a">
                        a
                      </Link>
                      <Link to="/" className="product--a">
                        a
                      </Link>
                      <Link to="/" className="product--a">
                        a
                      </Link>
                    </div>
                  </div>
                  <div
                    className="product__footer--action"
                    onClick={handleClick}
                  >
                    <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
                    <div className="product__dropdown__content">
                      <Link to="/user/detail" className="product--button">
                        Xem chi tiết
                      </Link>
                      <Link to="/user/detail" className="product--button">
                        Thêm hoạt động
                      </Link>
                      <button className="product--button">Hoàn thành</button>
                      <button className="product--button">Xóa sản phẩm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col l-3 c-3 m-3">a</div>
          <div className="col l-3 c-3 m-3">a</div>
          <div className="col l-3 c-3 m-3">a</div>
        </div>
      </div>
      <CopyRight styles={true} />
    </section>
  );
};

export default Body;
