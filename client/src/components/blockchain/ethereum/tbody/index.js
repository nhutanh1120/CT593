import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl, GTIN } from "./../../../../constants/index";
import { IPFS } from "./../../../../constants/ipfs";
import {
  showSuccessToast,
  showErrorToast,
} from "./../../../utils/notification/message";

const TbodyData = ({ item, index, checkAll }) => {
  const [status, setStatus] = useState(true);

  const handleClick = async () => {
    const res = await axios.get(apiUrl + "/blockchain/mobile/read/" + item.id);
    if (res?.data.success) {
      setStatus(res?.data?.success);
      showSuccessToast("Dử liệu hợp lệ");
    } else {
      setStatus(false);
      showErrorToast("Dử liệu đã bị thay đổi");
    }
  };
  if (checkAll) handleClick();
  const handleRestore = async () => {
    const res = await axios.put(apiUrl + "/blockchain/restore/" + item.id, {
      hash: item.hashString,
    });
    if (res?.data.success) {
      setStatus(res?.data?.success);
      showSuccessToast("Khôi phục thành công!");
    } else {
      setStatus(false);
      showErrorToast("Khôi phục thất bại!");
    }
  };
  return (
    <tr className={(!status && "table_body color__red") || "table__body"}>
      <td>{index}</td>
      <td className="text__overflow">{item.walletAddress}</td>
      <td>{item.censor}</td>
      <td>{item.id}</td>
      <td className="text__overflow">
        <Link to={{ pathname: IPFS + item.hashString }} target="_blank">
          {item.hashString}
        </Link>
      </td>
      <td>{moment.unix(item.createTime).format("DD/MM/YYYY")}</td>
      <td className="table__body--action">
        <Link
          className="tbody__action"
          to={"/agricultural/" + GTIN + item.id}
          target="_blank"
        >
          <div className="action__tooltip">Xem chi tiết</div>
          <span className="view">
            <i className="bx bx-show"></i>
          </span>
        </Link>
        <button className="tbody__action" onClick={handleRestore}>
          <div className="action__tooltip">khôi phục</div>
          <span className="view">
            <i className="bx bx-reset"></i>
          </span>
        </button>
        <button className="tbody__action" onClick={handleClick}>
          <div className="action__tooltip">kiểm tra</div>
          <span className="view">
            <i className="bx bx-check"></i>
          </span>
        </button>
      </td>
    </tr>
  );
};

export default TbodyData;
