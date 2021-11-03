import React, { useEffect } from "react";
import Validator from "../../../utils/validation/Vanilla";
import "./style.css";
// import FileBase64 from "react-file-base64";
import axios from "axios";
import { useSelector } from "react-redux";

const FormPost = () => {
  const token = useSelector((state) => state.token);
  useEffect(() => {
    (() => {
      Validator({
        form: "#post__form",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
          Validator.isRequired("#name", "Vui lòng nhập tên đầy đủ của bạn"),
          Validator.minLength("#name", 10),
          Validator.isRequired("#title", "Vui lòng nhập tiêu đề bài viết"),
          Validator.isRequired("#tags", "Vui lòng nhập hashtag bài viết"),
          Validator.isRequired(
            "#description",
            "Vui lòng nhập nội dung bài viết"
          ),
          Validator.isRequired("#attachment", "Vui lòng chọn ảnh đại diện"),
        ],
        onSubmit: function (data) {
          (async (data) => {
            const { title, description, tags } = data;
            const req = { title, description, tags: [...tags] };
            await axios.post("http://localhost:4000/api/post/", req, {
              headers: { Authorization: "Bearer " + token },
            });
          })(data);
        },
      });
    })();
  }, [token]);

  return (
    <div className="post__form">
      <h5>Tạo bài viết mới</h5>
      <form id="post__form">
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
          <input
            id="tags"
            name="tags"
            type="text"
            placeholder="hashtags: #nongsan #caytrong"
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
        <div className="form__group">
          <input
            id="attachment"
            name="attachment"
            type="file"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <button>Gửi</button>
      </form>
    </div>
  );
};

export default FormPost;
