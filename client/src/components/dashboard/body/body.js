import React from "react";
import { Link } from "react-router-dom";
import card from "./../../../assets/JsonData/card.json";
import Card from "../card/card";
import "./body.css";
import Table from "../table/table";
import TopNavbar from "../navbar/navbar";

const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "john doe",
      order: "490",
      price: "$15,870",
    },
    {
      username: "frank iva",
      order: "250",
      price: "$12,251",
    },
    {
      username: "anthony baker",
      order: "120",
      price: "$10,840",
    },
    {
      username: "frank iva",
      order: "110",
      price: "$9,251",
    },
    {
      username: "anthony baker",
      order: "80",
      price: "$8,840",
    },
  ],
};

const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const Body = () => {
  return (
    <section className="home-section">
      <TopNavbar />
      <div className="grid body">
        <h2 className="dashboard--body">Dash board</h2>
        <div className="row">
          <div className="l-12 c-12">
            <div className="row">
              {card.map((item, index) => (
                <div key={index} className="col l-3">
                  <Card
                    icon={item.icon}
                    count={item.count}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="l-6">
            <div className="card--chart"></div>
          </div>
        </div>
        <div className="row">
          <div className="l-12">
            <div className="card--body">
              <div className="card--body__header">
                <h3>top customer</h3>
              </div>
              <div className="card--body__content">
                <Table
                  theadData={topCustomers.head}
                  renderHead={(item, index) => renderHead(item, index)}
                  tbodyData={topCustomers.body}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              </div>
              <div className="card--body__footer">
                <Link to="/">view all</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
