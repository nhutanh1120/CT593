import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./../components/layouts/header/header";
import Footer from "./../components/layouts/footer/footer";
import img from "./../assets/img/wave.png";
import "./../assets/css/post.css";

function Contact() {
  return (
    <div className="App">
      <Header />
      <div className="mt-5">
        <h1>Tin tức</h1>
        <Container>
          <Row>
            <Col md={3}>
              <div className="card">
                <img
                  src={img}
                  className="card-img-top"
                  style={{ height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={img}
                  className="card-img-top"
                  style={{ height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={img}
                  className="card-img-top"
                  style={{ height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="card">
                <img
                  src={img}
                  className="card-img-top"
                  style={{ height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
