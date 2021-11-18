import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiUrl } from "../../../../constants";
import { showSuccessToast } from "../../../utils/notification/message";

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
  const handleCheck = async () => {
    const res = await axios.patch(
      apiUrl + "/agricultural/admin/" + state.id,
      null,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    if (res?.data?.success) {
      showSuccessToast("Thao tác thành công, vui lòng kiểm tra thông tin.");
    }
  };

  return (
    <tr className="table__body">
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
          <button className="tbody__action" onClick={handleCheck}>
            <div className="action__tooltip">
              {(state.status === 1 && "Duyệt") || "Chưa yêu cầu"}
            </div>
            <span className="lock">
              <i
                className={
                  (state.status === 1 && "bx bx-check ") || "bx bx-no-entry"
                }
              ></i>
            </span>
          </button>
        )}
      </td>
    </tr>
  );
};

export default TbodyData;
