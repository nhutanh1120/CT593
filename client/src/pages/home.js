import React from "react";
import "./../assets/css/home.css";
import Video from "./../assets/video/ot-cover-video-9-3-mb.mp4";
import Email from "./../components/layouts/email/email";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";
import ScrollTop from "./../components/layouts/scrollTop/scrollTop";
import utility from "./../assets/img/utility.png";

function Home() {
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
            <button>ĐĂNG NHẬP</button>
          </div>
        </div>
      </section>
      <div>
        <div>
          <div className="ve-chung-toi">
            <span>Về chúng tôi</span>
            <p className="mt-3">
              Bằng chiếc điện thoại di động thông minh của mình, ở bất kỳ đâu,
              vào bất cứ thời điểm nào, chỉ bằng một động tác, bạn có thể kiểm
              tra về nguồn gốc xuất xứ của sản phẩm hay tiến hành mua sắm hoàn
              toàn đơn giản.
            </p>
            <button variant="outline-info">Xem chi tiết</button>
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
