import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "./../../../constants";
import {
  showErrorToast,
  showSuccessToast,
} from "./../../utils/notification/message";
import { isEmail, isEmpty } from "./../../utils/validation/Validation";
import "./styles.css";

const initialState = {
  email: "",
  success: "",
  error: "",
};
function Email() {
  const [state, setState] = useState(initialState);
  const { email, success, error } = state;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ [name]: value, error: "" });
  };
  const handleInput = () => {
    const error = document.querySelector(".message__error__email");
    if (!error) return;
    error.innerText = "";
  };
  const handleBlurInput = () => {
    const error = document.querySelector(".message__error__email");
    if (!error) return;
    if (isEmpty(email)) {
      error.innerText = "Vui lòng nhập email.";
    }
    if (!isEmail(email)) {
      error.innerText = "Vui lòng nhập email đúng định dạng.";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleBlurInput();
    try {
      const res = await axios.post(apiUrl + "/contact/create", {
        email,
      });
      if (res.data.success) {
        setState({ ...state, success: res.data.success, error: "" });
      }
    } catch (error) {
      error.response.data.message &&
        setState({
          ...state,
          success: "",
          error: Math.random(),
        });
    }
  };
  useEffect(() => {
    if (error) {
      showErrorToast("Thao tác thất bại, email đã tồn tại.");
    }
    if (success) {
      showSuccessToast(
        "Thao tác thành công, vui lòng check mail khi có thông báo."
      );
    }
  }, [success, error]);
  return (
    <div className="email--padding">
      <div id="toast"></div>
      <div className="search__email email">
        <div className="search__header">
          <h2>Là Người Đầu Tiên</h2>
          <p>
            Nhận tin tức mới nhất, lời mời và ưu đãi trực tiếp đến thư của bạn.
          </p>
          <hr />
        </div>
        <div className="search__email--input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email của bạn"
              onChange={handleChangeInput}
              onBlur={handleBlurInput}
              onInput={handleInput}
            />
            <input type="submit" value="Đăng ký" />
            <div className="alert--error">
              <small className="message__error__email"></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Email;
