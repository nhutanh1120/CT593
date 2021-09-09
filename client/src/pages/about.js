import React from "react";
import Header from "./../components/layouts/header/header";
import Footer from "./../components/layouts/footer/footer";
import { Container, Row } from "react-bootstrap";
import IntroduceCard from "./../components/Introduce";
import Product from "../components/origintrail/product";

function About() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Container>
        <Row>
          <IntroduceCard imageUrl="adasdsa" title="abcdef" text="adasd" />
          <IntroduceCard imageUrl="adasdsa" title="abcdef" text="adasd" />
          <IntroduceCard imageUrl="adasdsa" title="abcdef" text="adasd" />
          <IntroduceCard imageUrl="adasdsa" title="abcdef" text="adasd" />
          <IntroduceCard imageUrl="adasdsa" title="abcdef" text="adasd" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
