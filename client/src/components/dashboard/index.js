import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import card from "./../../assets/JsonData/card.json";
import CardData from "./../../assets/JsonData/dashboard/card.js";
import TopCustomers from "./../../assets/JsonData/dashboard/topCustomer.js";
import LatestAgricultural from "./../../assets/JsonData/dashboard/lastAgricultural";
import {
  dispatchGetAllAgricultural,
  fetchAllAgricultural,
} from "./../../redux/actions/getAllAgriculturalActions";
import {
  fetchAllUsers,
  dispatchGetAllUsers,
} from "./../../redux/actions/usersAction";
import Badge from "./badge/badge";
import Card from "./card/card";
import "./style.css";
import Table from "./table/table";

const chartOptions = {
  series: [
    {
      name: "Cây Trồng",
      data: [0, 25, 0, 0, 0, 0, 0, 25, 0, 4],
    },
    {
      name: "Vật Nuôi",
      data: [0, 17, 5, 0, 0, 0, 0, 20, 0, 6],
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
      categories: ["16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr className="table__body" key={index}>
    <td>{item.username}</td>
    <td>{item.agricultural}</td>
    <td>{item.success}</td>
  </tr>
);

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
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  useEffect(() => {
    if (dispatch) {
      const getAllAgricultural = () => {
        return fetchAllAgricultural().then((res) => {
          dispatch(dispatchGetAllAgricultural(res));
        });
      };
      getAllAgricultural();
    }
  }, [dispatch]);
  useEffect(() => {
    if (token) {
      const getAllUser = () => {
        return fetchAllUsers(token).then((res) => {
          dispatch(dispatchGetAllUsers(res));
        });
      };
      getAllUser();
    }
  }, [token, dispatch]);

  // Get data from redux
  let card;
  let topCustomers;
  let latestAgricultural;

  const getData = () => {
    card = CardData();
    topCustomers = TopCustomers();
    latestAgricultural = LatestAgricultural();
  };
  getData();

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
              <Link to="/admin/dashboard/product">Xem tất cả</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
