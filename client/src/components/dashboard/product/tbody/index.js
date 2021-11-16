import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiUrl } from "../../../../constants";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../utils/notification/message";

const isStatus = (key) => {
  switch (key) {
    case 1:
      return "Chờ duyệt";
    case 2:
      return "Đã duyệt";
    default:
      return "Đang phát triển";
  }
};
const TbodyData = ({ item, index }) => {
  const token = useSelector((state) => state.token);
  const [state, setState] = useState({});
  useEffect(() => {
    setState(item);
  }, [item]);
  const handleAccess = async () => {
    let access = state.access;
    const res = await axios.patch(
      apiUrl + "/profile/access/update/" + state._id,
      { access: !access },
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    if (res.data.success) {
      showSuccessToast("Thao tác thành công, vui lòng kiểm tra thông tin.");
      setState({
        ...state,
        access: !state.access,
      });
    } else showErrorToast("Thao tác thất bại, vui lòng kiểm tra thông tin");
  };
  // console.log("state", state);
  return (
    <tr className="table__body" key={index}>
      <td>{index}</td>
      <td>{state.fullname || "Chưa cập nhật"}</td>
      <td>{state.breed || "Chưa cập nhật"}</td>
      <td>{(state.type === "0" && "Cây trồng") || "vật nuôi"}</td>
      <td>{moment(state.update).format("DD.MM.YYYY") || "0"}</td>
      <td>{isStatus(state.status)}</td>
      <td className="table__body--action">
        <Link
          className="tbody__action"
          to={"/agricultural/" + state.id}
          target="_blank"
        >
          <div className="action__tooltip">Xem chi tiết</div>
          <span className="view">
            <i className="bx bx-show"></i>
          </span>
        </Link>
        {state.status <= 1 && (
          <button className="tbody__action" onClick={handleAccess}>
            <div className="action__tooltip">
              {(state.status === 1 && "Duyệt") || "Chưa yêu cầu"}
            </div>
            <span className="lock">
              <i
                className={(state.status === 1 && "bx bx-x") || "bx bx-check"}
              ></i>
            </span>
          </button>
        )}
      </td>
    </tr>
  );
};

export default TbodyData;
