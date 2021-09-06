import React from "react";
import { Link } from "react-router-dom";
import "./resetpass.css";

const ResetPassword = () => {
  return (
    <div>
      <div className="container-fluid pb-5 mt-2">
        <div className="row">
          <div className="col-md-12 text-center">
            <img alt="logo" width="100px" height="100px" />
            <h5>
              <b>Luu Moments</b>
            </h5>
          </div>
        </div>
        <form id="reset" action="encode_email.php" method="POST">
          <div className="row mt-3">
            <div className="col-md-4 mx-auto bg-form px-5">
              <h5 className="text-center mt-4">Reset Mật Khẩu </h5>
              <p className="reset-text mt-3">
                Nhập địa chỉ email của bạn vào bên dưới và chúng tôi sẽ gửi cho
                bạn một liên kết để đặt lại mật khẩu của bạn.
              </p>
              <label>Email</label>
              <div className="form-reset mb-3">
                <span className="pr-1">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  id="resetmail"
                  name="email"
                  placeholder="Địa chỉ Email"
                />
              </div>

              <input
                type="submit"
                value="Gửi"
                className="btn btn-info btn-rounded btn-block my-4 waves-effect z-depth-0"
              />
              <span id="show" className="text-danger">
                &nbsp;
              </span>
              <div className="mt-2 py-4 text-center border-top">
                <Link
                  to="./../../../frontend/pages/dangnhap.html"
                  title="Đăng nhập"
                >
                  Đăng nhập
                </Link>{" "}
                OR
                <Link
                  to="./../../../frontend/pages/dangky.html"
                  title="Đăng ký"
                >
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </form>
        <div className="row mt-5">
          <div className="col-md-4 mx-auto text-center">
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
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
