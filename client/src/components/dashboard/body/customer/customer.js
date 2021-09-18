import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "./../../navbar/navbar";
import Table from "./../../table/table";

import customerList from "../../../../assets/JsonData/customers.json";

const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr className="table__body" key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

const CustomerBody = () => {
  return (
    <section className="home-section">
      <TopNavbar data={customerList} />
      <div className="grid body">
        <h2 className="dashboard--body">Quản lý người dùng</h2>
        <div className="row">
          <div className="col l-12">
            <div className="card--body">
              {/* <div className="card--body__header">
                <h3>top customer</h3>
              </div> */}
              <div className="card--body__content">
                <Table
                  limit="10"
                  theadData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  tbodyData={customerList}
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

export default CustomerBody;
