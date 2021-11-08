import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import getBase64 from "../../../utils/filebases64";
import Validator from "../../../utils/validation/Vanilla";
import { apiUrl } from "./../../../../constants/index";
import "./style.css";

const FormPost = () => {
  const token = useSelector((state) => state.token);
  useEffect(() => {
    (() => {
      Validator({
        form: "#post__form",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
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
            const { title, description, tags, attachment } = data;
            let attachmentBases64;

            await getBase64(attachment[0]).then(
              (data) => (attachmentBases64 = data)
            );

            const req = {
              title,
              description,
              tags: [tags],
              attachment: attachmentBases64 || "",
            };
            const res = await axios.post(apiUrl + "/post/", req, {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            console.log(res);
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
