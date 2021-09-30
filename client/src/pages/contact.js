import React from "react";
import ScrollTop from "./../components/scrollTop/scrollTop";
import Brand from "./../components/contact/Brand/brand";
import Connection from "./../components/contact/connection";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";

function Contact() {
  return (
    <div className="App" style={{ background: "#f1f1f1" }}>
      <Header isActiveHeader="isActiveHeader" />
      <Brand />
      <Connection />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Contact;
