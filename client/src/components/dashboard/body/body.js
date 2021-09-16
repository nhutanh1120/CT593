import React from "react";
import "./body.css";
import card from "./../../../assets/JsonData/card.json";
import Card from "../card/card";

const Body = () => {
  return (
    <div className="grid">
      <h2 className="dashboard--body">Dash board</h2>
      <div className="row">
        <div className="l-12 c-12">
          <div className="row">
            {card.map((item, index) => (
              <div className="col l-3">
                <Card icon={item.icon} count={item.count} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
