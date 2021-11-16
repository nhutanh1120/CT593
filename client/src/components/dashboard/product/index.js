import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { apiUrl } from "./../../../constants";
import useSortableData from "./../../utils/sort/index";
import "./style.css";
import TbodyData from "./tbody";

const Product = () => {
  // Get data
  const token = useSelector((state) => state.token);
  const [agriculturalList, setAgriculturalList] = useState([]);

  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(
    agriculturalList.slice(0, Number(limit))
  );

  useEffect(() => {
    (async () => {
      const res = await axios.get(apiUrl + "/agricultural/all/read");
      if (res?.data?.success) {
        const newArray = [];
        res.data.agricultural.map((item) => {
          const newObject = {
            id: item._id,
            fullname: `${item.administrator.surname} ${item.administrator.forename}`,
            breed: item.breed.nameBreed,
            type: item.breed.typeAgricultural,
            update: item.updatedAt,
            status: item.status,
          };
          newArray.push(newObject);
          return newArray;
        });
        setAgriculturalList(newArray);
      }
    })();
  }, [token]);
  console.log(agriculturalList);

  useEffect(() => {
    setPagination(agriculturalList.slice(0, Number(limit)));
  }, [agriculturalList, limit]);

  let pages = 1;
  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(agriculturalList.length / Number(limit));
    pages = agriculturalList.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(limit) * page;
    const end = start + Number(limit);
    setPagination(agriculturalList.slice(start, end));
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
      setLimit(agriculturalList.length);
      setPagination(agriculturalList.slice(0, agriculturalList.length));
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
    <div className="grid body dashboard__product">
      <div id="toast"></div>
      <div className="dashboard__body__header">
        <h2>Quản lý nông sản</h2>
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
                        tên người dùng
                        <div
                          className="th__icon"
                          onClick={() => requestSort("fullname")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        Tên nông sản
                        <div
                          className="th__icon"
                          onClick={() => requestSort("breed")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        loại nông sản
                        <div
                          className="th__icon"
                          onClick={() => requestSort("type")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        ngày cập nhật
                        <div
                          className="th__icon"
                          onClick={() => requestSort("update")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        trạng thái
                        <div
                          className="th__icon"
                          onClick={() => requestSort("status")}
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
              <button onClick={clickViewAll}>
                {view ? "Thu gọn" : "Xem tất cả"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
