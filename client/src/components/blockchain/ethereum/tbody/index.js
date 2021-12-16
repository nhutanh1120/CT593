import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { GTIN } from "./../../../../constants/index";
import { IPFS } from "./../../../../constants/ipfs";

const TbodyData = ({ item, index }) => {
  return (
    <tr className="table__body">
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
      </td>
    </tr>
  );
};

export default TbodyData;
