import React from "react";
import Header from "./../components/layouts/header/header";
import Footer from "./../components/layouts/footer/footer";
import Connection from "./../components/contact/connection";
import Brand from "./../components/contact/Brand/brand";

function Contact() {
  return (
    <div className="App" style={{ background: "#f1f1f1" }}>
      <Header isActiveHeader="isActiveHeader" />
      <Brand />
      <Connection />
      <Footer />
    </div>
  );
}

export default Contact;
