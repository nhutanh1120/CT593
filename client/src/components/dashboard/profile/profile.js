import React from "react";
import Validator from "../../utils/validation/Vanilla";
import profile from "./../../../assets/img/profile.jpg";
import "./profile.css";

const Profile = () => {
  document.addEventListener("DOMContentLoaded", function () {
    Validator({
      form: "#form-1",
      formGroupSelector: ".form__group",
      errorSelector: ".form__message",
      rules: [
        Validator.isRequired("#fullname", "Vui lòng nhập tên đầy đủ của bạn"),
        Validator.isEmail("#email", "Vui lòng nhập email đúng định dạng"),
        Validator.minLength("#number", 10),
        Validator.isRequired("#address", "Vui lòng nhập địa chỉ"),
        Validator.isRequired("#description", "Vui lòng nhập mô tả"),
      ],
      onSubmit: function (data) {
        // Call API
        console.log(data);
      },
    });
  });
  return (
    <div className="main">
      <form action="" method="POST" className="form margin--0" id="form-1">
        {/* <h3 className="heading"></h3>
        <p className="desc"></p>
        <div className="spacer"></div> */}
        <div className="form__group form__group--img">
          <img
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = profile;
            }}
            src=""
            alt="img"
          />
          <div className="form__edit--img">
            <i className="bx bxs-edit-alt"></i>
          </div>
        </div>

        <div className="form__group">
          <label htmlFor="fullname" className="form__label">
            Tên đầy đủ
          </label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="VD: Nhựt Lưu"
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
          <label htmlFor="number" className="form__label">
            Số điện thoại
          </label>
          <input
            id="number"
            name="number"
            type="number"
            placeholder="0xxx xxx xxx"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>

        <div className="form__group">
          <label htmlFor="address" className="form__label">
            Địa chỉ
          </label>
          <input
            id="address"
            name="address"
            placeholder="Nhập địa chỉ"
            type="text"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="description" className="form__label">
            Thông tin mô tả
          </label>

          <textarea
            name="description"
            id="description"
            className="form__control form__control--textarea"
            placeholder="Hãy cho chúng tôi biết thông tin về bạn"
          ></textarea>
          <span className="form__message"></span>
        </div>

        <button className="form__submit">Lưu</button>
      </form>
    </div>
  );
};

export default Profile;
