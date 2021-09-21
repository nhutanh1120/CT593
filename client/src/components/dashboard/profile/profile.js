import React from "react";
import Validator from "../../utils/validation/Vanilla";
import "./profile.css";

const Profile = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // Mong muốn của chúng ta
    Validator({
      form: "#form-1",
      formGroupSelector: ".form__group",
      errorSelector: ".form__message",
      rules: [
        Validator.isRequired("#fullname", "Vui lòng nhập tên đầy đủ của bạn"),
        Validator.isEmail("#email"),
        Validator.minLength("#password", 6),
        Validator.isRequired("#password_confirmation"),
        Validator.isConfirmed(
          "#password_confirmation",
          function () {
            return document.querySelector("#form-1 #password").value;
          },
          "Mật khẩu nhập lại không chính xác"
        ),
      ],
      onSubmit: function (data) {
        // Call API
        console.log(data);
      },
    });
  });
  return (
    <div className="main">
      <form action="" method="POST" className="form" id="form-1">
        <h3 className="heading">Thành viên đăng ký</h3>
        <p className="desc">Cùng nhau học lập trình miễn phí tại F8 ❤️</p>

        <div className="spacer"></div>

        <div className="form__group">
          <label htmlFor="fullname" className="form__label">
            Tên đầy đủ
          </label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="VD: Sơn Đặng"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>

        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="VD: email@domain.com"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>

        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Mật khẩu
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>

        <div className="form__group">
          <label htmlFor="password_confirmation" className="form__label">
            Nhập lại mật khẩu
          </label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Nhập lại mật khẩu"
            type="password"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>

        <button className="form__submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default Profile;
