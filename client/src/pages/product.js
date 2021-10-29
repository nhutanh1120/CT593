import React from "react";
import SlideShow from "../components/product/slideshow";
import Footer from "../components/layouts/footer/footer";
import Header from "../components/layouts/header/header";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";

function Product() {
  return (
    <div className="App">
      <Header />
      <div className="post">
        <div className="grid wide">
          <SlideShow />
          <h1>Nông sản</h1>
          <p></p>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Product;
