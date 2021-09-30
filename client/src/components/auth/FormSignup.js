import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { apiUrl } from "./../../constants";
import { dispatchLogin } from "./../../redux/actions/authAction";
import {
  showErrorToast,
  showSuccessToast,
} from "./../utils/notification/message";
import {
  isEmail,
  isEmpty,
  isLength,
  isMatch,
} from "./../utils/validation/Validation";

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
  const dispatch = useDispatch();
  const history = useHistory();

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
      if (
        isMatch(event.firstElementChild.name, "username") &&
        isEmpty(username)
      ) {
        event.nextElementSibling.innerText = "Vui lòng nhập Tài khoản.";
        check = false;
      }
      if (isMatch(event.firstElementChild.name, "email") && !isEmail(email)) {
        event.nextElementSibling.innerText =
          "Vui lòng nhập Email đúng định dạng.";
        check = false;
      }
      if (
        isMatch(event.firstElementChild.name, "password") &&
        isEmpty(password)
      ) {
        event.nextElementSibling.innerText = "Vui lòng nhập Mật khẩu.";
        check = false;
      } else if (
        isMatch(event.firstElementChild.name === "password") &&
        isLength(password)
      ) {
        event.nextElementSibling.innerText = "Mật khẩu phải từ 6 ký tự.";
        check = false;
      }
      if (
        isMatch(event.firstElementChild.name, "cf_password") &&
        isEmpty(cf_password)
      ) {
        event.nextElementSibling.innerText = "Vui lòng nhập lại mật khẩu.";
        check = false;
      } else if (
        isMatch(event.firstElementChild.name, "cf_password") &&
        !isMatch(password, cf_password)
      ) {
        event.nextElementSibling.innerText = "Mật khẩu không khớp.";
        check = false;
      }
    });
    if (check === false) return false;

    try {
      const res = await axios.post(apiUrl + "/auth/register", {
        username,
        password,
        email,
      });

      setUser({ ...user, error: "", success: res.data.message });
    } catch (error) {
      error.response.data.message &&
        setUser({ ...user, error: Math.random(), success: "" });
    }
  };

  const handleBlurInput = (e) => {
    if (isMatch(e.target.name, "username") && isEmpty(username)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Vui lòng nhập Tài khoản.";
    }
    if (isMatch(e.target.name, "email") && !isEmail(email)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Vui lòng nhập Email đúng định dạng.";
    }
    if (isMatch(e.target.name, "password") && isEmpty(password)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Vui lòng nhập Mật khẩu.";
    } else if (isMatch(e.target.name, "password") && isLength(password)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Mật khẩu phải từ 6 ký tự.";
    }
    if (isMatch(e.target.name, "cf_password") && isEmpty(cf_password)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Vui lòng nhập lại mật khẩu.";
    } else if (isMatch(e.target.name, "cf_password") && isLength(cf_password)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Mật khẩu phải từ 6 ký tự.";
    } else if (
      isMatch(e.target.name, "cf_password") &&
      !isMatch(password, cf_password)
    ) {
      e.target.parentElement.nextElementSibling.innerText =
        "Mật khẩu không khớp.";
    }
  };
  const handleInput = (e) => {
    e.target.parentElement.nextElementSibling.innerText = "";
    e.target.parentElement.nextElementSibling.style = "display:none";
  };

  const responseGoogle = async (response) => {
    try {
      const res = await axios.post(apiUrl + "/auth/google/login", {
        tokenId: response.tokenId,
      });
      setUser({ ...user, error: "", success: res.data.message });
      localStorage.setItem("firstLogin", true);
      dispatch(dispatchLogin());
      history.push("/dashboard");
    } catch (error) {
      error?.response?.data?.message &&
        setUser({ ...user, error: Math.random(), success: "" });
    }
  };

  // Show/hide password
  const [passwordShown, setPasswordShown] = useState(false);
  const showHide = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    if (error) {
      showErrorToast("Tài khoản hoặc email đã tồn tại.");
    }
    if (success) {
      showSuccessToast("Bạn đã đăng ký tài khoản thành công.");
    }
  }, [error, success]);
  return (
    <>
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
        <div className="social-media">
          <GoogleLogin
            clientId="350754393545-ges26agoopegg76ojspuem9ccsh1ti8a.apps.googleusercontent.com"
            buttonText="Đăng nhập với Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </form>
    </>
  );
};

export default FormSignup;
