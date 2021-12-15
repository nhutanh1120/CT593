import React from "react";
import moment from "moment";

const TbodyData = ({ item, index }) => {
  return (
    <tr className="table__body">
      <td>{index}</td>
      <td className="text__overflow ">
        {item.walletAddress || "Chưa cập nhật"}
      </td>
      <td>{item.censor || "Chưa cập nhật"}</td>
      <td>{item.id || "Chưa cập nhật"}</td>
      <td className="text__overflow ">{item.hashString || "Chưa cập nhật"}</td>
      <td>
        {moment.unix(item.createTime).format("DD/MM/YYYY") || "Chưa cập nhật"}
      </td>
      <td className="table__body--action"></td>
    </tr>
  );
};

export default TbodyData;
