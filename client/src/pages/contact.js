import React from "react";
import Header from "./../components/layouts/header/header";
import Footer from "./../components/layouts/footer/footer";
import Connection from "./../components/contact/connection";
import Brand from "./../components/contact/Brand/brand";

function Contact() {
  return (
    <div className="App">
      <Header isActiveHeader="isActiveHeader" />
      <Brand />

      <Footer />
      <Connection />
    </div>
  );
}

export default Contact;
