import React from "react";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";
import Brand from "./../components/contact/Brand/brand";
import Connection from "./../components/contact/connection";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";
import "./../assets/css/contact.css";
import QR from "./../assets/img/qr.png";
import utility from "./../assets/img/utility1.png";

function Contact() {
  return (
    <div className="App" style={{ background: "#f1f1f1" }}>
      <Header isActiveHeader="isActiveHeader" />
      <Brand />
      <Connection />
      <div className="grid wide">
        <div className="row contact__utility">
          <div className="l-7 c-12 m-12">
            <div className="contact__utility__head">
              <img src="" alt="img" />
              <h2>luu moments</h2>
            </div>
            <h4>quản lý nguồn góc sản phẩm dể dàng</h4>
            <p>
              <b>Luu moments agricultural</b>&nbsp;hiện là nền tảng quản lý
              chuỗi cung ứng nông sản và truy suất nguồn góc sản phẩm nhanh
              chóng. Đồng hành cùng chúng tôi, bạn có thể quản lý chuỗi cung ứng
              của mình một cách dể dàng. Với Luu moments, việc truy suất nguồn
              gốc nông sản như cây trồng, vật nuôi... trở nên nhanh chóng, thuận
              tiện và dễ dàng.
            </p>
            <div className="contact__utility--qr">
              <img src={QR} alt="img" />
              <div className="contact__utility--button">
                <button>
                  <i className="bx bxl-play-store bx-md"></i>&nbsp;google play
                </button>
                <button>
                  <i className="bx bxl-apple bx-md"></i>&nbsp;app store
                </button>
              </div>
            </div>
          </div>
          <div className="l-5 c-12 m-12">
            <img src={utility} alt="img" />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Contact;
