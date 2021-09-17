import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="dashboard--card">
      <div className="dashboard--card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="dashboard--card__text">
        <h4>{props.count}</h4>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default Card;
