import React from "react";
import "./style.css";

const Approve = (props) => {
  return (
    <>
      <div className="approve-content">
        <div className="zoom">
          <img src={props.imgUrl} alt="img" />
          <div className="player"></div>
        </div>
        <span className="zoom-title">{props.title}</span>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default Approve;
