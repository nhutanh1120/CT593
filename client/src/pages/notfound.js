import React from "react";
import { Link } from "react-router-dom";
import "./../assets/css/animation.css";
import "./../assets/css/notfound.css";

function NotFound() {
  return (
    <div className="App">
      <section className="page_404">
        <div className="grid wide">
          <div className="col l-10 c-12 m-12 mx-auto">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>

            <div className="constant_box_404">
              <h3 className="h2">Trang không tồn tại</h3>
              <p>Chúng tôi không tìm thấy trang bạn đang tìm.</p>

              <Link to="/" className="link_404">
                Về trang chủ
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="animation--notfound">
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
      </div>
    </div>
  );
}

export default NotFound;
