import React from "react";
import { Col, Image } from "react-bootstrap";

const IntroduceCard = (props) => {
  let imageUrl = props.imageUrl;
  //   alert(imageUrl);
  return (
    <div>
      <Col md={3}>
        <div>
          <Image src={imageUrl} rounded />
        </div>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </Col>
    </div>
  );
};

export default IntroduceCard;
