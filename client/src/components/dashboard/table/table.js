import React, { useState, useEffect } from "react";
import "./table.css";

const Table = (props) => {
  const initialState =
    props.limit && props.tbodyData
      ? props.tbodyData.slice(0, Number(props.limit))
      : props.tbodyData;

  const [pagination, setPagination] = useState(initialState);

  let pages = 1;
  let range = [];

  if (props.limit !== undefined) {
    let page = Math.floor(props.tbodyData.length / Number(props.limit));
    pages =
      props.tbodyData.length % Number(props.limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }
  // useEffect(() => {
  //   range = [...Array(props.tbodyData.length).keys()];
  // }, [props.limit]);

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);

    setPagination(props.tbodyData.slice(start, end));

    setCurrPage(page);
  };
  return (
    <>
      <div className="dashboard--table">
        <table>
          {props.theadData && props.renderHead ? (
            <thead>
              <tr>
                {props.theadData.map((item, index) =>
                  props.renderHead(item, index)
                )}
              </tr>
            </thead>
          ) : null}
          {props.tbodyData && props.renderBody ? (
            <tbody>
              {pagination.map((item, index) => props.renderBody(item, index))}
            </tbody>
          ) : null}
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
    </>
  );
};

export default Table;
