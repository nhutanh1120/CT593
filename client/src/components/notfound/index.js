import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NotFoundComponents() {
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-sm-offset-1 text-center">
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
        </div>
      </section>
    </>
  );
}

export default NotFoundComponents;
