import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { isEmail } from "./../utils/validation/Validation";
import { apiUrl } from "./../../constants";
import "./forgotForm.css";

const initialState = {
  email: "",
  success: "",
  error: "",
};
const FormForgot = ({ showMessage }) => {
  const [forgotData, setForgotData] = useState(initialState);
  const { email, success, error } = forgotData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForgotData({ ...forgotData, [name]: value, success: "", error: "" });
  };

  const forgotPassword = async (event) => {
    event.preventDefault();

    if (!isEmail(email))
      return setForgotData({
        ...forgotData,
        success: "",
        error: "Vui lòng nhập email đúng định dạng!",
      });
    try {
      const res = await axios.post(apiUrl + "/auth/forgot", { email });
      if (res.data.success) {
        senData(res.data.success);
      }
      return setForgotData({
        ...forgotData,
        success: res.data.message,
        error: "",
      });
    } catch (error) {
      error.response.data &&
        setForgotData({
          ...forgotData,
          success: "",
          error: error.response.data.message,
        });
      senData(error.response.data.success);
    }
  };
  const senData = (type, message) => {
    showMessage({
      type,
      message,
    });
  };
  return (
    <>
      <form className="form--reset" onSubmit={forgotPassword}>
        <h5 className="text-center mt-4">Khôi phục mật khẩu</h5>
        <p className="form__reset__text mt-3">
          Nhập địa chỉ email của bạn vào bên dưới và chúng tôi sẽ gửi cho bạn
          một liên kết để đặt lại mật khẩu của bạn.
        </p>
        <label htmlFor="email">Email</label>
        <div className="form__reset__group mb-3">
          <span className="pr-1">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Địa chỉ Email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <button type="submit" className="form__reset_submit">
          Gửi
        </button>
        <span id="show" className="text-danger">
          &nbsp;
        </span>
        <div className="mt-2 py-4 text-center border-top">
          <Link to="./../../../frontend/pages/dangnhap.html" title="Đăng nhập">
            Đăng nhập
          </Link>{" "}
          OR
          <Link to="./../../../frontend/pages/dangky.html" title="Đăng ký">
            Đăng ký
          </Link>
        </div>
      </form>
      {error && success}
    </>
  );
};

export default FormForgot;
