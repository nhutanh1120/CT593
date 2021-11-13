import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { apiUrl } from "../../../constants";
import getBase64 from "../../utils/filebases64";
import profile from "./../../../assets/img/profile.jpg";
import { dispatchGetUser } from "./../../../redux/actions/authAction";
import {
  showErrorToast,
  showWarningToast,
} from "./../../utils/notification/message";
import "./style.css";

const initialState = {
  img: "",
  avatar: "",
};
function isEmpty(value) {
  if (value === "" || value === undefined) return true;
  return false;
}
const AvatarItem = ({ role, info, contact }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const [state, setState] = useState(initialState);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { forename, surname, male, birthday } = info;
    const { phone, address, social } = contact;
    const convertBoolean = String(male).toLowerCase() === "true";

    if (isEmpty(state.img)) {
      document.getElementById("avatar__message").innerText =
        "Vui lòng chọn ảnh đại diện của bạn";
      return;
    }

    if (!info || isEmpty(forename) || isEmpty(surname) || isEmpty(birthday)) {
      showWarningToast("Vui lòng điền đầy đủ thông tin cá nhân.");
      return;
    }
    if (!contact || isEmpty(phone) || isEmpty(address)) {
      showWarningToast("Vui lòng điền đầy đủ thông tin liên hệ.");
      return;
    }
    const req = {
      forename,
      surname,
      male: convertBoolean,
      birthday,
      social: social || "",
      phone,
      address,
      avatar: state.avatar,
      role,
    };

    const res = await axios.patch(apiUrl + "/profile/update", req, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!res?.data?.success) {
      showErrorToast("Thao tác thất bại, vui lòng kiểm tra thông tin.");
    } else {
      dispatch(dispatchGetUser(res));
      history.push("/");
    }
  };
  const handleChange = (e) => {
    const { name, files } = e.target;
    getBase64(files[0]).then((data) =>
      setState({ [name]: URL.createObjectURL(files[0]), avatar: data })
    );
  };

  return (
    <div className="pane__avatar">
      <div id="toast"></div>
      <div className="pane__avatar--img">
        <img
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = profile;
          }}
          src={state.img}
          alt="images"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="file" className="form__label">
            Ảnh đại diện
            <small>*</small>
          </label>
          <input
            id="file"
            name="img"
            type="file"
            className="form__control"
            onChange={handleChange}
          />
          <span id="avatar__message" className="form__message"></span>
        </div>
        <button className="btn__submit">Cập nhật thông tin</button>
      </form>
    </div>
  );
};

export default AvatarItem;
