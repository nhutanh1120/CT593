import React from "react";
import { Link } from "react-router-dom";
import FormForgot from "./../components/auth/formForgot";
import "./../components/utils/notification/message.css";

const forgotPassword = () => {
  return (
    <div className="App">
      <div className="col-md-12 text-center">
        <img alt="logo" width="100px" height="100px" />
        <h5>
          <b>Luu Moments</b>
        </h5>
      </div>
      <FormForgot />
      <div className="mx-auto text-center">
        <p>
          Dùng tài khoản khác để truy cập ứng dụng của <b>Luu Moments</b>
        </p>
        <span className="contac">
          <Link to="https://facebook.com/" title="Facebook">
            <i className="fa fa-facebook facebook" aria-hidden="true"></i>
          </Link>
        </span>
        <span className="contac ml-3">
          <Link to="tel:0399234016" title="phone">
            <i className="fa fa-twitter twitter" aria-hidden="true"></i>
          </Link>
        </span>
        <span className="contac ml-3">
          <Link to="mailto:ltanhutd20086@cusc.ctu.edu.vn" title="Email">
            <i className="fa fa-google-plus google" aria-hidden="true"></i>
          </Link>
        </span>
        <span className="contac ml-3">
          <Link to="https://github.com/" title="Github">
            <i className="fa fa-github github" aria-hidden="true"></i>
          </Link>
        </span>
      </div>
      <div id="toast"></div>
    </div>
  );
};

export default forgotPassword;
