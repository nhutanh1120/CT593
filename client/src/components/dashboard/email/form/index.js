import React from "react";
import "./style.css";

const FormEmail = () => {
  return (
    <div className="email__form">
      <h5>Tạo bài viết mới</h5>
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
        <button>Gửi</button>
      </form>
    </div>
  );
};

export default FormEmail;
