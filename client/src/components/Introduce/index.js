import React from "react";

const IntroduceCard = (props) => {
  let imageUrl = props.imageUrl;
  //   alert(imageUrl);
  return (
    <div>
      <div>
        <div>
          <img src={imageUrl} alt="img" />
        </div>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default IntroduceCard;
