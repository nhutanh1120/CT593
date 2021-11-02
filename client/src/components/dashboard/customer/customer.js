import axios from "axios";
// import React, { useRef, useState } from "react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiUrl } from "./../../../constants/index";
// import customerList from "./../../../assets/JsonData/customers.json";
import useSortableData from "./../../utils/sort/index";
import TbodyData from "./tbody";

const Customer = () => {
  // Get data
  const token = useSelector((state) => state.token);
  const [customerList, setCustomerList] = useState([]);

  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(
    customerList.slice(0, Number(limit))
  );

  useEffect(() => {
    (async () => {
      const res = await axios.get(apiUrl + "/profile/all/info", {
        headers: { Authorization: "Bearer " + token },
      });
      setCustomerList(res.data.users);
    })();
  }, [token]);

  useEffect(() => {
    setPagination(customerList.slice(0, Number(limit)));
  }, [customerList, limit]);

  let pages = 1;
  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(customerList.length / Number(limit));
    pages = customerList.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(limit) * page;
    const end = start + Number(limit);
    setPagination(customerList.slice(start, end));
    setCurrPage(page);
  };

  // sort
  const { items, requestSort } = useSortableData(pagination);

  // view all
  const ref = useRef(null);
  const [view, setView] = useState(false);
  const clickViewAll = (event) => {
    event.preventDefault();
    if (!view) {
      setLimit(customerList.length);
      setPagination(customerList.slice(0, customerList.length));
      setView(!view);
      ref.current = {
        limit,
        pagination,
      };
    } else {
      setLimit(ref.current.limit);
      setPagination(ref.current.pagination);
      setView(!view);
    }
  };
  return (
    <div className="grid body">
      <div id="toast"></div>
      <div className="dashboard__body__header">
        <h2>Quản lý người dùng</h2>
        <button className="btn">
          <i className="bx bx-plus bx-sm bx-burst-hover"></i>
          <span className="tooltip__create">thêm mới</span>
        </button>
      </div>
      <div className="row">
        <div className="col l-12">
          <div className="card--body">
            <div className="card--body__content">
              <div className="dashboard--table">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>
                        họ tên
                        <div
                          className="th__icon"
                          onClick={() => requestSort("fullname")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        email
                        <div
                          className="th__icon"
                          onClick={() => requestSort("email")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        số điện thoại
                        <div
                          className="th__icon"
                          onClick={() => requestSort("phone")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        sản phẩm
                        <div
                          className="th__icon"
                          onClick={() => requestSort("total_orders")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        vai trò
                        <div
                          className="th__icon"
                          onClick={() => requestSort("role")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <TbodyData key={index} item={item} index={index + 1} />
                    ))}
                  </tbody>
                </table>
              </div>
              {pages > 1 ? (
                <div className="table__pagination">
                  {range.map((item, index) => (
                    <div
                      key={index}
                      className={`table__pagination--item ${
                        currPage === index ? "active" : ""
                      }`}
                      onClick={() => selectPage(index)}
                    >
                      {item + 1}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="card--body__footer">
              <Link to="/" onClick={clickViewAll}>
                {view ? "Thu gọn" : "Xem tất cả"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
