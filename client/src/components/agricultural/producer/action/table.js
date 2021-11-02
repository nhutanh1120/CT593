import React from "react";
import moment from "moment";

const TableAction = ({ action }) => {
  return (
    <div className="table--content">
      <ul>
        <li>Hoạt động: {action.typeAction}</li>
        <li>
          Thời gian: {moment(action.timeAction).format("DD/MM/YYYY")}
          &nbsp;(
          {moment(action.timeAction).fromNow()})
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm sử dụng</th>
            <th>Nhà cung cấp</th>
          </tr>
        </thead>
        <tbody>
          {action.listAction.map((listAction, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{listAction.nameAction}</td>
              <td>{listAction.supplierAction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAction;
