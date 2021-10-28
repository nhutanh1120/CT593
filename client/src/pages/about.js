import React from "react";
// import img from "./../assets/img/contact1.png";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";
import "./../assets/css/about.css";

function About() {
  return (
    <div className="App">
      <Header />
      <div className="about">
        <div className="grid wide">
          <h5>giới thiệu</h5>
          <p></p>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default About;
