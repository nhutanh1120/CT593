import React from "react";
import Header from "./../components/layouts/header/header";
import Footer from "./../components/layouts/footer/footer";
import IntroduceCard from "./../components/Introduce";
// import Product from "../components/origintrail/product";

function About() {
  return (
    <div className="App">
      <Header />
      {/* <Product /> */}
      <div>
        <div>
          <IntroduceCard imageUrl="adasdsa" title="abcdef" text="adasd" />
          <IntroduceCard imageUrl="adasdsa" title="abcdef" text="adasd" />
          <IntroduceCard imageUrl="adasdsa" title="abcdef" text="adasd" />
          <IntroduceCard imageUrl="adasdsa" title="abcdef" text="adasd" />
          <IntroduceCard imageUrl="adasdsa" title="abcdef" text="adasd" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
