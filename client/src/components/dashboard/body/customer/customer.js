import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "./../../navbar/navbar";

import customerList from "../../../../assets/JsonData/customers.json";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const CustomerBody = () => {
  const [limit, setLimit] = useState(10);

  const [pagination, setPagination] = useState(
    customerList.slice(0, Number(limit))
  );
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
    <section className="home-section">
      <TopNavbar data={customerList} />
      <div className="grid body">
        <h2 className="dashboard--body">Quản lý người dùng</h2>
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
                          name
                          <div
                            className="th__icon"
                            onClick={() => requestSort("name")}
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
                          phone
                          <div
                            className="th__icon"
                            onClick={() => requestSort("phone")}
                          >
                            <i className="bx bx-sort"></i>
                          </div>
                        </th>
                        <th>
                          total orders
                          <div
                            className="th__icon"
                            onClick={() => requestSort("total orders")}
                          >
                            <i className="bx bx-sort"></i>
                          </div>
                        </th>
                        <th>
                          total spend
                          <div
                            className="th__icon"
                            onClick={() => requestSort("total spend")}
                          >
                            <i className="bx bx-sort"></i>
                          </div>
                        </th>
                        <th>
                          location
                          <div
                            className="th__icon"
                            onClick={() => requestSort("location")}
                          >
                            <i className="bx bx-sort"></i>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr className="table__body" key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.total_orders}</td>
                          <td>{item.total_spend}</td>
                          <td>{item.location}</td>
                        </tr>
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
    </section>
  );
};

export default CustomerBody;
