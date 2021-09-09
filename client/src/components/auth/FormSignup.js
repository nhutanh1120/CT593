import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import {
//   showErrMsg,
//   showSuccessMsg,
// } from "./../utils/notification/Notification";
import {
  showSuccessToast,
  showErrorToast,
} from "../utils/notification/message";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../utils/validation/Validation";
import { apiUrl } from "../../constants";
import { showSuccessMsg } from "../utils/notification/Notification";

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
      <form
        className="sign-up-form"
        showSuccessMsg={true}
        onSubmit={handleSubmit}
      >
        <h2 className="title">Sign up</h2>

        <div className="input-field">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChangeInput}
          />
        </div>
        <div className="input-field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="input-field">
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChangeInput}
          />
          <span onClick={showHide}>{passwordShown ? "Ẩn" : "Hiện"}</span>
        </div>
        <div className="input-field">
          <input
            type={passwordShown ? "text" : "password"}
            name="cf_password"
            placeholder="Confirm password"
            value={cf_password}
            onChange={handleChangeInput}
          />
          <span onClick={showHide}>{passwordShown ? "Ẩn" : "Hiện"}</span>
        </div>
        <input type="submit" className="btn" value="Sign up" />
        <p className="social-text">Or Sign up with social platforms</p>
        <div className="social-media">
          <Link to="/" className="social-icon">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </Link>
          <Link to="/" className="social-icon">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </Link>
          <Link to="/" className="social-icon">
            <i className="fa fa-google-plus" aria-hidden="true"></i>
          </Link>
          <Link to="/" className="social-icon">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormSignup;
