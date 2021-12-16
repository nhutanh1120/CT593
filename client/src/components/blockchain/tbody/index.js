import axios from "axios";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Web3 from "web3";
import { apiUrl } from "./../../../constants";
import { ABI, ADDRESS_SMART_CONTRACT } from "./../../../constants/contract";
import {
  showSuccessToast,
  showErrorToast,
} from "./../../utils/notification/message";
import { create } from "ipfs-http-client";
import { projectId, projectSecret } from "./../../../constants/ipfs";

const TbodyData = ({ item, index, account }) => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.auth.user);
  const agriculturalAll = useSelector((state) => state.agriculturalAll);

  const handleCheck = async () => {
    if (window.ethereum === "undefined") {
      showErrorToast("Bạn chưa cài đặt metamask!");
      return;
    }
    if (account == null) {
      showErrorToast("Vui long kết nối metamask!");
      return;
    }
    const data = agriculturalAll.find((data) => (data._id = item.id));

    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();

    //create contract metamask
    const contract = new web3.eth.Contract(ABI, ADDRESS_SMART_CONTRACT);

    const auth =
      "Basic " +
      Buffer.from(projectId + ":" + projectSecret).toString("base64");

    const ipfs = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      headers: {
        authorization: auth,
      },
    });

    ipfs.add(JSON.stringify(data)).then((res) => {
      console.log(res);
      contract.methods.addAgricultural(item.id, user._id, res.path).send({
        from: account,
      });
    });

    const res = await axios.patch(
      apiUrl + "/agricultural/admin/" + item.id,
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
      <td>{item.fullname || "Chưa cập nhật"}</td>
      <td>{item.breed || "Chưa cập nhật"}</td>
      <td>{(item.type === "0" && "Cây trồng") || "vật nuôi"}</td>
      <td>{moment(item.update).format("DD.MM.YYYY") || "0"}</td>
      <td>Chờ duyệt</td>
      <td className="table__body--action">
        <Link
          className="tbody__action"
          to={"/agricultural/manager/" + item.id}
          target="_blank"
        >
          <div className="action__tooltip">Xem chi tiết</div>
          <span className="view">
            <i className="bx bx-show"></i>
          </span>
        </Link>
        <button className="tbody__action" onClick={handleCheck}>
          <div className="action__tooltip">Duyệt</div>
          <span className="lock">
            <i className="bx bx-check"></i>
          </span>
        </button>
      </td>
    </tr>
  );
};

export default TbodyData;
