import moment from "moment";
import React, { useEffect, useState } from "react";

const TbodyItem = ({ data, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.nameAction}</td>
      <td>{data.supplierAction}</td>
    </tr>
  );
};
const typeAction = (typeBreed, typeAction) => {
  let string;
  if (typeBreed === 0) {
    string = typeAction === 0 ? "Phun thuốc" : "Bón phân";
  } else {
    string = typeAction === 0 ? "Thuốc phòng bệnh" : "Thức ăn";
  }
  return string;
};

const initialState = {
  typeAction: "",
  listAction: [],
  timeAction: "",
};
const Actions = ({ data }) => {
  console.log(data);
  const [state, setState] = useState(initialState);
  useEffect(() => {
    setState(data);
  }, [data]);
  console.log(state);
  return (
    <div className="detail__table">
      <div className="detail__table__header">
        <p>Hoạt động:&nbsp;{typeAction(1, state.typeAction)}</p>
        <p>
          Thời gian:&nbsp;{moment(state.timeAction).format("DD-MM-YYYY")}
          &nbsp;({moment(state.timeAction).fromNow()})
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm sử dụng</th>
            <th>Nhà cung cấp</th>
          </tr>
        </thead>
        <tbody>
          {state.listAction.map((item, index) => (
            <TbodyItem data={item} index={index} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Actions;
