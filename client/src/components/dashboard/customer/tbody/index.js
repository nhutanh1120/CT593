import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { apiUrl } from "../../../../constants";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../utils/notification/message";

const isRole = (key) => {
  switch (key) {
    case "1":
      return "quản trị";
    case "2":
      return "sản xuất";
    case "3":
      return "phân phối";
    case "4":
      return "chế biến";
    case "5":
      return "bán lẽ";
    default:
      return "khách hàng";
  }
};
const TbodyData = ({ item, index }) => {
  const token = useSelector((state) => state.token);
  const handleAccess = async () => {
    let access = item.access;
    const res = await axios.patch(
      apiUrl + "/profile/access/update/" + item._id,
      { access: !access },
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    if (res.data.success)
      showSuccessToast("Thao tác thành công, vui lòng kiểm tra thông tin.");
    else showErrorToast("Thao tác thất bại, vui lòng kiểm tra thông tin");
  };
  return (
    <tr className="table__body" key={index}>
      <td>{index}</td>
      <td>{item.fullname || "Chưa cập nhật"}</td>
      <td>{item.email || "Chưa cập nhật"}</td>
      <td>{item.phone || "Chưa cập nhật"}</td>
      <td>{item.total_orders || "0"}</td>
      <td>{isRole(item.role)}</td>
      <td className="table__body--action">
        <button className="tbody__action" onClick={() => alert("Xem chi tiet")}>
          <div className="action__tooltip">Xem chi tiết</div>
          <span className="view">
            <i className="bx bx-show"></i>
          </span>
        </button>
        <button className="tbody__action" onClick={handleAccess}>
          <div className="action__tooltip">
            {(item.access && "Khóa") || "Mở khóa"}
          </div>
          <span className="lock">
            <i className={(item.access && "bx bx-x") || "bx bx-check"}></i>
          </span>
        </button>
      </td>
    </tr>
  );
};

export default TbodyData;
