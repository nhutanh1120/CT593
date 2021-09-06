import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

function Email() {
  return (
    <Container className="search" fluid>
      <Container>
        <Row>
          <Col md={9} className="mx-auto email">
            <div className="text-center mt-3">
              <h2 className="mx-auto">Là Người Đầu Tiên</h2>
              <p>
                Nhận tin tức mới nhất, lời mời và ưu đãi trực tiếp đến thư của
                bạn.
              </p>
              <hr />
            </div>
            <div className="search-email">
              <form
                action="frontend/functions/email/xulyemail.php"
                method="POST"
                className="mx-auto"
              >
                <input
                  type="text"
                  id="input-email"
                  name="input-email"
                  placeholder="Email của bạn"
                />
                <input type="submit" value="Đăng ký" />
                <div className="alert-loi">
                  <small id="thongbaoemail"></small>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Email;
