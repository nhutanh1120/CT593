import React, { useState, useEffect, useRef } from "react";
import useSortableData from "./../../../utils/sort/index";
import TbodyData from "./tbody";

const TableEmail = ({ customerList, dataEmail }) => {
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(
    customerList.slice(0, Number(limit))
  );

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

  /**
   * Handle Table
   */
  const [sendMail, setSendMail] = useState([]);
  const [check, setCheck] = useState(false); // default false
  const handleCheckAll = () => {
    let newArray = [];
    // default false
    if (!check) customerList.map((item) => newArray.push(item.email));
    setSendMail(newArray);
    setCheck(!check);
  };
  const addSendEmail = (data) => {
    let newArray = [...sendMail];
    newArray.push(data);
    setSendMail(newArray);
  };
  const deleteSendEmail = (data) => {
    const newArray = sendMail.filter((item) => item !== data);
    setSendMail(newArray);
  };
  useEffect(() => {
    dataEmail(sendMail);
  }, [sendMail, dataEmail]);
  return (
    <div className="card--body">
      <div className="card--body__content">
        <div className="table__select__all">
          <span>
            <input
              id="email__check"
              name="checkAll"
              type="checkbox"
              value={check}
              onChange={handleCheckAll}
            />
            <label htmlFor="email__check">Chọn tất cả</label>
          </span>
          <select name="" id="">
            <option value="">- - Chọn - -</option>
          </select>
        </div>
        <div className="dashboard--table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>STT</th>
                <th>
                  Tên tài khoản
                  <div
                    className="th__icon"
                    onClick={() => requestSort("username")}
                  >
                    <i className="bx bx-sort"></i>
                  </div>
                </th>
                <th>
                  Tên người dùng
                  <div
                    className="th__icon"
                    onClick={() => requestSort("surname")}
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
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <TbodyData
                  key={index}
                  item={item}
                  index={index}
                  isCheck={check}
                  addSendMail={addSendEmail}
                  deleteSendEmail={deleteSendEmail}
                />
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
        <button onClick={clickViewAll}>
          {view ? "Thu gọn" : "Xem tất cả"}
        </button>
      </div>
    </div>
  );
};

export default TableEmail;
