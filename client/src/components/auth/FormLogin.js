import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
// import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { showErrorToast } from "../utils/notification/message";
import { dispatchLogin } from "../../redux/actions/authAction";
import { apiUrl } from "../../constants";
import { isMatch, isEmpty, isLength } from "../utils/validation/Validation";

const initialState = {
  username: "",
  password: "",
  error: "",
};

const FormLogin = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const { username, password, error } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, error: "", success: "" });
  };
  const handleBlurInput = (e) => {
    if (isMatch(e.target.name, "username") && isEmpty(e.target.value)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Vui lòng nhập Tài khoản.";
    }
    if (isMatch(e.target.name, "password") && isEmpty(e.target.value)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Vui lòng nhập Mật khẩu.";
    } else if (isMatch(e.target.name, "password") && isLength(e.target.value)) {
      e.target.parentElement.nextElementSibling.innerText =
        "Mật khẩu phải từ 6 ký tự.";
    }
  };
  const handleInput = (e) => {
    e.target.parentElement.nextElementSibling.innerText = "";
    e.target.parentElement.nextElementSibling.style = "display:none";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let check = true;
    const event = document.querySelectorAll(".sign-in-form .input--field");
    event.forEach((event) => {
      if (
        isMatch(event.firstElementChild.name, "username") &&
        isEmpty(event.firstElementChild.value)
      ) {
        event.nextElementSibling.innerText = "Vui lòng nhập Tài khoản.";
        check = false;
      }
      if (
        isMatch(event.firstElementChild.name, "password") &&
        isEmpty(event.firstElementChild.value)
      ) {
        event.nextElementSibling.innerText = "Vui lòng nhập Mật khẩu.";
        check = false;
      } else if (
        isMatch(event.firstElementChild.name, "password") &&
        isLength(event.firstElementChild.value)
      ) {
        event.nextElementSibling.innerText = "Mật khẩu phải từ 8 ký tự.";
        check = false;
      }
    });

    if (check === true) {
      try {
        const res = await axios.post(apiUrl + "/auth/login", {
          username,
          password,
        });
        if (res.data.success) {
          setUser({ ...user, error: "" });

          localStorage.setItem("firstLogin", true);

          dispatch(dispatchLogin());
          history.push("/dashboard");
        }
      } catch (error) {
        error.response.data.message &&
          setUser({
            ...user,
            error: error.response.data.message,
          });
      }
    }
  };

  // const responseGoogle = async (response) => {
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:4000/api/auth/google_login",
  //       {
  //         tokenId: response.tokenId,
  //       }
  //     );

  //     setUser({ ...user, error: "", success: res.data.message });
  //     localStorage.setItem("firstLogin", true);

  //     dispatch(dispatchLogin());
  //     history.push("/dashboard");
  //   } catch (error) {
  //     error.response.data.message &&
  //       setUser({ ...user, error: error.response.data.message, success: "" });
  //   }
  // };

  // const responseFacebook = async (response) => {
  //   try {
  //     const { accessToken, userID } = response;
  //     const res = await axios.post(
  //       "http://localhost:4000/api/auth/facebook_login",
  //       {
  //         accessToken,
  //         userID,
  //       }
  //     );

  //     setUser({ ...user, error: "", success: res.data.message });
  //     localStorage.setItem("firstLogin", true);

  //     dispatch(dispatchLogin());
  //     history.push("/dashboard");
  //   } catch (error) {
  //     error.response.data.message &&
  //       setUser({ ...user, error: error.response.data.message, success: "" });
  //   }
  // };
  // Show/hide password
  const [passwordShown, setPasswordShown] = useState(false);
  const showHide = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // -----------------------
  // const componentClicked = () => {};

  return (
    <>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h2 className="title">Đăng nhập</h2>
        {error
          ? showErrorToast(
              "Thất bại",
              "Tài khoản hoặc mật khẩu không chính xác.",
              "error"
            )
          : null}
        <div className="social--media">
          {/* <FacebookLogin
            appId="199091375537292"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
          /> */}
          {/* <GoogleLogin
            clientId="350754393545-ges26agoopegg76ojspuem9ccsh1ti8a.apps.googleusercontent.com"
            buttonText="Đăng nhập với Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
        </div>
        <p className="social--text">Hoặc đăng nhập với tài khoản của bạn</p>
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
        <Link to="/forgot">
          Quên mật khẩu?&nbsp;<b>Nhấn vào đây</b>
        </Link>
        <button type="submit" className="btn solid">
          Đăng nhập
        </button>
      </form>
    </>
  );
};

export default FormLogin;
