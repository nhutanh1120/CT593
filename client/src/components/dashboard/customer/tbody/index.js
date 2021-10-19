import React from "react";

const TbodyData = ({ item, index }) => {
  return (
    <>
      <tr className="table__body" key={index}>
        <td>{index}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td className="table__body--action">
          <button className="tbody__action">
            <div className="action__tooltip">Xem chi tiết</div>
            <span className="view">
              <i className="bx bx-show"></i>
            </span>
          </button>
          <button className="tbody__action">
            <div className="action__tooltip">Khóa</div>
            <span className="lock">
              <i className="bx bx-check"></i>
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default TbodyData;
