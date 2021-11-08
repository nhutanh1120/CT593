import React from "react";
import { Link } from "react-router-dom";
import card from "../../assets/JsonData/card.json";
import Badge from "./badge/badge";
import Card from "./card/card";
import Table from "./table/table";
import "./style.css";
import Chart from "react-apexcharts";

const chartOptions = {
  series: [
    {
      name: "Cây Trồng",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Vật Nuôi",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const topCustomers = {
  head: ["Người dùng", "nông sản", "hoàn thành"],
  body: [
    {
      username: "john doe",
      agricultural: "490",
      success: "70",
    },
    {
      username: "frank iva",
      agricultural: "250",
      success: "250",
    },
    {
      username: "anthony baker",
      agricultural: "120",
      success: "40",
    },
    {
      username: "frank iva",
      agricultural: "110",
      success: "51",
    },
    {
      username: "anthony baker",
      agricultural: "80",
      success: "40",
    },
  ],
};

const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr className="table__body" key={index}>
    <td>{item.username}</td>
    <td>{item.agricultural}</td>
    <td>{item.success}</td>
  </tr>
);

const latestAgricultural = {
  header: ["# id", "người dùng", "tên nông sản", "ngày", "trạng thái"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      name: "Succulent Seeds",
      status: "shipping",
      content: "construct",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      name: "Nature Hills",
      status: "paid",
      content: "success",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      name: "Rise with the Sun",
      status: "pending",
      content: "pending",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      name: "Location Irrigation",
      status: "paid",
      content: "success",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      name: "New Ag",
      status: "refund",
      content: "cancel",
    },
  ],
};

const agriculturalStatus = {
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
    <td>{item.name}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={agriculturalStatus[item.status]} content={item.content} />
    </td>
  </tr>
);
const Body = () => {
  return (
    <div className="grid body">
      <div className="dashboard__body__header">
        <h2>Bảng điểu khiển</h2>
      </div>
      <div className="row">
        <div className="col l-6 m-12 c-12">
          <div className="row">
            {card.map((item, index) => (
              <div key={index} className="col l-6 m-6 c-12">
                <Card icon={item.icon} count={item.count} title={item.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="col l-6 m-12 c-12">
          <div className="card--chart">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col l-4 m-12 c-12">
          <div className="card--body">
            <div className="card--body__header">
              <h3>Người dùng</h3>
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
              <Link to="/admin/dashboard/customer">view all</Link>
            </div>
          </div>
        </div>
        <div className="col l-8 m-12 c-12">
          <div className="card--body">
            <div className="card--body__header">
              <h3>Nông sản mới</h3>
            </div>
            <div className="card--body__content">
              <Table
                theadData={latestAgricultural.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                tbodyData={latestAgricultural.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card--body__footer">
              <Link to="/admin/dashboard/product">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
