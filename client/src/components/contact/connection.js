import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  showErrorToast,
  showSuccessToast,
} from "./../utils/notification/message";
import { apiUrl } from "./../../constants";
import Validator from "./../utils/validation/Vanilla";
import "./style.css";

const initialState = {
  success: "",
  error: "",
};
function Connection() {
  const [state, setState] = useState(initialState);
  const { success, error } = state;
  const validate = () => {
    Validator({
      form: "#form-contact",
      formGroupSelector: ".form__group",
      errorSelector: ".form__message",
      rules: [
        Validator.isRequired("#fullname", "Vui lòng nhập tên đầy đủ của bạn"),
        Validator.isEmail("#email", "Vui lòng nhập email đúng định dạng"),
        Validator.minLength("#phone", 10),
        Validator.isRequired("#address", "Vui lòng nhập địa chỉ"),
        Validator.isRequired("#description", "Vui lòng nhập mô tả"),
      ],
      onSubmit: function (data) {
        const callData = async (data) => {
          try {
            const res = await axios.post(apiUrl + "/contact/create", {
              data,
            });
            if (res.data.success) {
              setState({ success: res.data.success, error: "" });
            }
          } catch (error) {
            error.response.data.message &&
              setState({
                success: "",
                error: Math.random(),
              });
          }
        };
        callData(data);
      },
    });
  };
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", validate);
    if (error) {
      showErrorToast("Thao tác thất bại, email đã tồn tại.");
    }
    if (success) {
      showSuccessToast(
        "Thao tác thành công, vui lòng check mail khi có thông báo."
      );
    }
    return () => {
      document.removeEventListener("DOMContentLoaded", validate);
    };
  }, [success, error]);
  return (
    <div className="grid wide form__contact">
      <form id="form-contact">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <h2 className="text-center">Liện Hệ</h2>
            <div className="row">
              <div className="col l-6 m-6 c-12">
                <div className="form__group">
                  <label htmlFor="fullname" className="form__label">
                    Họ tên (Công ty hoặc nhà cung cấp)
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="Họ tên"
                    className="form__control"
                  />
                  <span className="form__message"></span>
                </div>
              </div>
              <div className="col l-6 m-6 c-12">
                <div className="form__group">
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Họ tên"
                    className="form__control"
                  />
                  <span className="form__message"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col l-6 m-6 c-12">
                <div className="form__group">
                  <label htmlFor="address" className="form__label">
                    Địa chỉ
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Họ tên"
                    className="form__control"
                  />
                  <span className="form__message"></span>
                </div>
              </div>
              <div className="col l-6 m-6 c-12">
                <div className="form__group">
                  <label htmlFor="phone" className="form__label">
                    Số điện thoại
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    placeholder="Họ tên"
                    className="form__control"
                  />
                  <span className="form__message"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col l-12 m-12 c-12">
                <div className="form__group">
                  <label htmlFor="description" className="form__label">
                    Mô tả
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="form__control form__textarea"
                    placeholder="Mô tả ..."
                  ></textarea>
                  <span className="form__message"></span>
                </div>
              </div>
              <button className="btn--message btn--danger mx-auto">Gửi</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Connection;
