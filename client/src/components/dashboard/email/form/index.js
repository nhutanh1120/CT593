import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { apiUrl } from "./../../../../constants";
import { showSuccessToast } from "./../../../utils/notification/message";
import Validator from "./../../../utils/validation/Vanilla";
import "./style.css";

const FormEmail = ({ dataSend }) => {
  console.log(dataSend);
  const token = useSelector((state) => state.token);
  useEffect(() => {
    (() => {
      Validator({
        form: "#email__form",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
          Validator.isRequired("#name", "Vui lòng nhập tên của bạn"),
          Validator.isRequired("#title", "Vui lòng nhập tiêu đề"),
          Validator.isRequired("#description", "Vui lòng nhập nội dung"),
        ],
        onSubmit: function (data) {
          (async (data) => {
            const dataSubmit = {
              address: dataSend,
              name: data.name,
              title: data.title,
              description: data.description,
            };
            console.log(dataSubmit);
            const res = await axios.post(apiUrl + "/email/send", dataSubmit, {
              headers: { Authorization: "Bearer " + token },
            });
            if (res.data.success) {
              showSuccessToast("Gửi mail thành công!");
            }
          })(data);
        },
      });
    })();
  }, [dataSend, token]);
  return (
    <div className="email__form">
      <h5>Tạo thư mới</h5>
      <div id="toast"></div>
      <form id="email__form">
        <div className="form__group">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Tên hiển thị"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Tiêu đề bài viết"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <textarea
            name="description"
            id="description"
            className="form__control form__textarea"
            placeholder="Nội dung"
          ></textarea>
          <span className="form__message"></span>
        </div>
        <button>Gửi</button>
      </form>
    </div>
  );
};

export default FormEmail;
