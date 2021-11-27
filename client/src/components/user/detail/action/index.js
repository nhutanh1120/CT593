import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { apiUrl } from "./../../../../constants";
import { updateAgricultural } from "./../../../../redux/actions/agriculturalActions";
import { showSuccessToast } from "./../../../utils/notification/message";
import "./style.css";

const TbodyItem = ({ data, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.nameAction}</td>
      <td>{data.supplierAction}</td>
      <td>{data.isolation}</td>
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
  const { id } = useParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const [state, setState] = useState(initialState);
  const ref = useRef(null);
  useEffect(() => {
    setState(data);
  }, [data]);
  const handleClick = () => {
    ref.current.firstChild.classList.toggle("active");
  };
  const onDelete = async (e) => {
    e.stopPropagation();
    const res = await axios.patch(
      apiUrl + "/agricultural/producer/delete/" + id,
      { id: state._id },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res?.data?.success) {
      showSuccessToast("Thao tác thành công, vui lòng kiểm tra thông tin");
      dispatch(updateAgricultural({ data: res.data.agricultural }));
    }
  };
  return (
    <div className="detail__table delete" onClick={handleClick} ref={ref}>
      <div className="action__delete" onClick={onDelete}>
        <i className="bx bx-trash"></i>
      </div>
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
            <th>Thời gian cách ly</th>
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
