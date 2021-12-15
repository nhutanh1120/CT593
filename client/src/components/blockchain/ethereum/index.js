import React, { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import { ABI, ADDRESS_SMART_CONTRACT } from "./../../../constants/contract";
import useSortableData from "./../../utils/sort/index";
import TbodyData from "./../tbody";

const Ethereum = () => {
  //create contract metamask
  const [dataBlockchain, setDataBlockchain] = useState([]);
  useEffect(() => {
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    const contract = new web3.eth.Contract(ABI, ADDRESS_SMART_CONTRACT);
    const getAllDataFromBlockchain = () => {
      contract.methods
        .getAllAgricultural()
        .call()
        .then((data) => {
          setDataBlockchain(data);
          console.log("success", data);
        })
        .catch((err) => console.log(err));
    };
    let check = true;
    if (check) getAllDataFromBlockchain();
    return () => {
      check = false;
    };
  }, []);

  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(
    dataBlockchain.slice(0, Number(limit))
  );

  useEffect(() => {
    setPagination(dataBlockchain.slice(0, Number(limit)));
  }, [dataBlockchain, limit]);

  let pages = 1;
  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(dataBlockchain?.length / Number(limit));
    pages = dataBlockchain?.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(limit) * page;
    const end = start + Number(limit);
    setPagination(dataBlockchain.slice(start, end));
    setCurrPage(page);
  };
  // sort
  const { items, requestSort } = useSortableData(pagination);

  // view all
  const ref = useRef(null);
  const [view, setView] = useState(false);
  const clickViewAll = (event) => {
    event.preventDefault();
    if (dataBlockchain.length < 0) return;
    if (!view) {
      setLimit(dataBlockchain.length);
      setPagination(dataBlockchain.slice(0, dataBlockchain.length));
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
          <i className="bx bx-station bx-sm bx-burst-hover"></i>
          <span className="tooltip__create">kết nối metamask</span>
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
                        Đại chỉ ví
                        <div
                          className="th__icon"
                          onClick={() => requestSort("walletAddress")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        Người kiểm duyệt
                        <div
                          className="th__icon"
                          onClick={() => requestSort("censor")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        Nông phẩm
                        <div
                          className="th__icon"
                          onClick={() => requestSort("id")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        chuỗi băm
                        <div
                          className="th__icon"
                          onClick={() => requestSort("hashString")}
                        >
                          <i className="bx bx-sort"></i>
                        </div>
                      </th>
                      <th>
                        thời gian
                        <div
                          className="th__icon"
                          onClick={() => requestSort("createTime")}
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

export default Ethereum;
