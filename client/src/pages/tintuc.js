import React from "react";
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
        <div>
          <div>
            <div>
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
            <div className="div-md-4">
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
            <div className="div-md-4">
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
            <div className="div-md-4 mt-3">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
