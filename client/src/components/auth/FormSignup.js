import React, { useState } from "react";
import axios from "axios";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../utils/validation/Validation";
import { apiUrl } from "../../constants";

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    let check = true;
    const event = document.querySelectorAll(".sign-up-form .input--field");
    event.forEach((event) => {
      console.log(event.firstElementChild.name);
      if (
        isMatch(event.firstElementChild.name, "username") &&
        isEmpty(event.firstElementChild.value)
      ) {
        event.nextElementSibling.innerText = "Vui lòng nhập Tài khoản.";
        check = false;
      }
      if (
        isMatch(event.firstElementChild.name, "email") &&
        !isEmail(event.nextElementSibling.value)
      ) {
        event.nextElementSibling.innerText =
          "Vui lòng nhập Email đúng định dạng.";
        check = false;
      }
      if (
        isMatch(event.firstElementChild.name, "password") &&
        isEmpty(event.firstElementChild.value)
      ) {
        event.nextElementSibling.innerText = "Vui lòng nhập Mật khẩu.";
        check = false;
      } else if (
        isMatch(event.firstElementChild.name === "password") &&
        isLength(event.firstElementChild.value)
      ) {
        event.nextElementSibling.innerText = "Mật khẩu phải từ 6 ký tự.";
        check = false;
      }
      if (
        isMatch(event.firstElementChild.name, "cf_password") &&
        isMatch(event.firstElementChild.value, password)
      ) {
        event.nextElementSibling.innerText = "Mật khẩu không khớp.";
        check = false;
      }
    });
    if (check === false) return false;

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
    } catch (error) {
      error.response.data.message &&
        setUser({ ...user, error: error.response.data.message, success: "" });
    }
  };

  const handleBlurInput = (e) => {
    if (isMatch(e.target.name, "username") && isEmpty(e.target.value)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Vui lòng nhập Tài khoản.";
    }
    if (isMatch(e.target.name, "email") && !isEmail(e.target.value)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Vui lòng nhập Email đúng định dạng.";
    }
    if (isMatch(e.target.name, "password") && isEmpty(e.target.value)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Vui lòng nhập Mật khẩu.";
    } else if (isMatch(e.target.name, "password") && isLength(e.target.value)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Mật khẩu phải từ 6 ký tự.";
    }
    if (
      isMatch(e.target.name, "cf_password") &&
      isMatch(e.target.value, password) &&
      isEmpty(e.target.value)
    ) {
      e.target.parentElement.nextElementSibling.innerText =
        "Mật khẩu không khớp.";
    }
  };
  const handleInput = (e) => {
    e.target.parentElement.nextElementSibling.innerText = "";
    e.target.parentElement.nextElementSibling.style = "display:none";
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
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2 className="title">Đăng ký</h2>

        <div className="input--field">
          <input
            type="text"
            name="username"
            placeholder="Tài khoản"
            onChange={handleChangeInput}
            onBlur={handleBlurInput}
            onInput={handleInput}
          />
        </div>
        <div className="message__error"></div>
        <div className="input--field">
          <input
            type="email"
            name="email"
            placeholder="Địa chỉ email"
            onChange={handleChangeInput}
            onBlur={handleBlurInput}
            onInput={handleInput}
          />
        </div>
        <div className="message__error"></div>
        <div className="input--field">
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="Mật khẩu"
            onChange={handleChangeInput}
            onBlur={handleBlurInput}
            onInput={handleInput}
          />
          <span onClick={showHide}>{passwordShown ? "Ẩn" : "Hiện"}</span>
        </div>
        <div className="message__error"></div>
        <div className="input--field">
          <input
            type={passwordShown ? "text" : "password"}
            name="cf_password"
            placeholder="Xác nhận mật khẩu"
            onChange={handleChangeInput}
            onBlur={handleBlurInput}
            onInput={handleInput}
          />
          <span onClick={showHide}>{passwordShown ? "Ẩn" : "Hiện"}</span>
        </div>
        <div className="message__error"></div>
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
