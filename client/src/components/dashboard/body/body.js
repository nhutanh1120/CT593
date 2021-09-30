import React from "react";
import { Link } from "react-router-dom";
import card from "./../../../assets/JsonData/card.json";
import Card from "./../card/card";
import "./body.css";
import Table from "./../table/table";
import TopNavbar from "./../navbar/navbar";
import Badge from "./../badge/badge";

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
  <tr className="table__body" key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr className="table__body" key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);
const Body = () => {
  return (
    <section className="home-section">
      <TopNavbar />
      <div className="grid body">
        <h2 className="dashboard--body">Dash board</h2>
        <div className="row">
          <div className="col l-6 c-6">
            <div className="row">
              {card.map((item, index) => (
                <div key={index} className="col l-6">
                  <Card
                    icon={item.icon}
                    count={item.count}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col l-6">
            <div className="card--chart"></div>
          </div>
        </div>
        <div className="row">
          <div className="col l-4">
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
                <Link to="/dashboard/customer">view all</Link>
              </div>
            </div>
          </div>
          <div className="col l-8">
            <div className="card--body">
              <div className="card--body__header">
                <h3>latest orders</h3>
              </div>
              <div className="card--body__content">
                <Table
                  theadData={latestOrders.header}
                  renderHead={(item, index) => renderOrderHead(item, index)}
                  tbodyData={latestOrders.body}
                  renderBody={(item, index) => renderOrderBody(item, index)}
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
