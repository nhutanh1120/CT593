import React from "react";
import "./../assets/css/home.css";
import home1 from "./../assets/img/home2.jpg";
import utility from "./../assets/img/home.png";
import Video from "./../assets/video/ot-cover-video-9-3-mb.mp4";
import Email from "./../components/layouts/email/email";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";
import ScrollTop from "./../components/layouts/scrollTop/scrollTop";

function Home() {
  const isLogin = localStorage.getItem("firstLogin");
  return (
    <div className="App">
      <Header isActiveHeader="isActiveHeader" />
      <section className="hero">
        <video preload="none" muted="muted" playsnline="true" autoPlay loop>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="home__header">
          <div className="home__header__title">
            <h5>Cùng chúng tôi xây dựng một tương lai tốt đẹp hơn</h5>
          </div>
          <div className="home__header__text">
            <p>
              Truy xuất nguồn gốc thực phẩm, yêu cầu các tiêu chuẩn lựa chọn và{" "}
              <br />
              tập trung vào việc thiết lập chuỗi cung ứng.
            </p>
          </div>
          <div className="home__header__button">
            <button>{(isLogin && "chi tiết") || "đăng nhập"}</button>
          </div>
        </div>
      </section>
      <div className="home__about">
        <div className="grid wide">
          <div className="row">
            <div className="col l-6">
              <div className="home__about__left">
                <h2>Quản lý nguồn gốc sản phẩm dể dàng</h2>
                <p>
                  Bằng chiếc điện thoại di động thông minh của mình, ở bất kỳ
                  đâu, vào bất cứ thời điểm nào, chỉ bằng một động tác, bạn có
                  thể kiểm tra về nguồn gốc xuất xứ của sản phẩm hay tiến hành
                  mua sắm hoàn toàn đơn giản.
                </p>
                <button className="btn">Xem chi tiết</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home__product">
        <div className="grid wide">
          <div className="row">
            <div className="col l-7 m-12 c-12 home__product--left">
              <h5>Quản lý nguồn gốc sản phẩm dể dàng</h5>
              <p>
                Luu moments agricultural hiện là nền tảng quản lý chuỗi cung ứng
                nông sản và truy suất nguồn góc sản phẩm nhanh chóng.
              </p>
              <p>
                Đồng hành cùng chúng tôi, bạn có thể quản lý chuỗi cung ứng của
                mình một cách dể dàng. Với Luu moments, việc truy suất nguồn gốc
                nông sản như cây trồng, vật nuôi... trở nên nhanh chóng, thuận
                tiện và dễ dàng.
              </p>
            </div>
            <div className="col l-5 m-12 c-12">
              <div className="home__product--right">
                <img src={home1} alt="images" />
                <p>
                  Vui lòng truy cập trang web luu moment để truy suất nguồn gốc
                  và quản lý nông sản của bạn.
                </p>
                <button>Luu moment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid wide home__utility">
        <h2 className="text-center">CÔNG CỤ TIỆN ÍCH</h2>
        <p className="text-center">
          Công cụ quản lý chuỗi cung ứng nông sản và truy suất nguồn gốc sản
          phẩm một cách nhanh chóng, dể dàng, mọi lúc mọi nơi.
        </p>
        <div className="row">
          <div className="col l-8 m-8 c-12">
            <img src={utility} alt="img" />
          </div>
          <div className="col l-4 m-4 c-12">
            <div className="utility__item">
              <h5>Công cụ quản lý chuỗi cung ứng trên máy tính</h5>
              <div className="utility__icon">
                <div className="utility__icon--group">
                  <i className="bx bxl-chrome"></i>
                  <p>chrome</p>
                </div>
                <div className="utility__icon--group">
                  <i className="bx bxl-firefox"></i>
                  <p>firefox</p>
                </div>
              </div>
            </div>
            <div className="utility__item">
              <h5>Ứng dụng truy suất nguồn gốc trên mobile</h5>
              <div className="utility__icon">
                <div className="utility__icon--group">
                  <i className="bx bxl-apple"></i>
                  <p>ios</p>
                </div>
                <div className="utility__icon--group">
                  <i className="bx bxl-android"></i>
                  <p>android</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Email />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Home;
