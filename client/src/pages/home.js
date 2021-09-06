import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "./../components/layouts/header/header";
import Footer from "./../components/layouts/footer/footer";
import Email from "./../components/layouts/email/email";
import Video from "./../assets/video/ot-cover-video-9-3-mb.mp4";
import "./../assets/css/home.css";

function Home() {
  return (
    <div className="App">
      <Header classNav="header-home" />
      <section className="hero">
        <video preload="none" muted="muted" playsnline="true" autoPlay loop>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="brand">
          <h5>Cùng chúng tôi xây dựng một tương lai tốt đẹp hơn</h5>
          <p>
            Truy xuất nguồn gốc thực phẩm, yêu cầu các tiêu chuẩn lựa chọn và{" "}
            <br />
            tập trung vào việc thiết lập chuỗi cung ứng.
          </p>
          <button>Đăng nhập</button>
        </div>
      </section>
      <Container>
        <Row>
          <Col md={5} className="ve-chung-toi">
            <span>Về chúng tôi</span>
            <p className="mt-3">
              Bằng chiếc điện thoại di động thông minh của mình, ở bất kỳ đâu,
              vào bất cứ thời điểm nào, chỉ bằng một động tác, bạn có thể kiểm
              tra về nguồn gốc xuất xứ của sản phẩm hay tiến hành mua sắm hoàn
              toàn đơn giản.
            </p>
            <Button variant="outline-info">Xem chi tiết</Button>
          </Col>
        </Row>
      </Container>
      <div>Trang chủ</div>
      <Email />
      <Footer />
    </div>
  );
}

export default Home;
