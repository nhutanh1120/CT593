import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
// import {
//   showSuccessToast,
//   showErrorToast,
// } from "../utils/notification/message";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../utils/validation/Validation";
import { apiUrl } from "../../constants";
// import { showSuccessMsg } from "../utils/notification/Notification";

const initialState = {
  username: "",
  email: "",
  password: "",
  cf_password: "",
  error: "",
  success: "",
};

const FormSignup = ({ successMsg }) => {
  const [user, setUser] = useState(initialState);

  const { username, email, password, cf_password, error, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, error: "", success: "" });
  };
  const senData = (data) => {
    successMsg(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("BA");
    // successMsg = "true";
    senData();
    // console.log(successMsg);
    if (isEmpty(username) || isEmpty(password))
      return setUser({
        ...user,
        error: "Please fill in all fields.",
        success: "",
      });

    if (!isEmail(email))
      return setUser({ ...user, error: "Invalid emails.", success: "" });

    if (isLength(password))
      return setUser({
        ...user,
        error: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setUser({
        ...user,
        error: "Password did not match.",
        success: "",
      });

    try {
      const res = await axios.post(apiUrl + "/auth/register", {
        username,
        password,
        email,
      });

      setUser({ ...user, error: "", success: res.data.message });
      // if (res.data.message) {
      //   props.success = true;
      // }
    } catch (error) {
      error.response.data.message &&
        setUser({ ...user, error: error.response.data.message, success: "" });
    }
  };

  // Show/hide password
  const [passwordShown, setPasswordShown] = useState(false);
  const showHide = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <>
      {/* {error && showErrorToast}
      {success && showSuccessToast} */}
      {error && success}
      <form
        className="sign-up-form"
        showSuccessMsg={true}
        onSubmit={handleSubmit}
      >
        <h2 className="title">Đăng ký</h2>

        <div className="input-field">
          <input
            type="text"
            name="username"
            placeholder="Tài khoản"
            value={username}
            onChange={handleChangeInput}
          />
        </div>
        <div className="input-field">
          <input
            type="email"
            name="email"
            placeholder="Địa chỉ email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="input-field">
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={handleChangeInput}
          />
          <span onClick={showHide}>{passwordShown ? "Ẩn" : "Hiện"}</span>
        </div>
        <div className="input-field">
          <input
            type={passwordShown ? "text" : "password"}
            name="cf_password"
            placeholder="Xác nhận mật khẩu"
            value={cf_password}
            onChange={handleChangeInput}
          />
          <span onClick={showHide}>{passwordShown ? "Ẩn" : "Hiện"}</span>
        </div>
        <button type="submit" className="btn">
          Đăng ký
        </button>
        <p className="social-text">Hoặc đăng nhập với các nền tảng</p>
        <div className="social-media"></div>
      </form>
    </>
  );
};

export default FormSignup;
