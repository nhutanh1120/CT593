import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import getBase64 from "../../../utils/filebases64";
import Validator from "../../../utils/validation/Vanilla";
import { apiUrl } from "./../../../../constants/index";
import { showSuccessToast } from "./../../../utils/notification/message";
import "./style.css";

const FormPost = ({ onCreate, dataUpdate, onUpdate }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    if (dataUpdate) {
      setState(dataUpdate);
    }
  }, [dataUpdate]);

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
            if (!state) {
              const res = await axios.post(apiUrl + "/post/", req, {
                headers: {
                  Authorization: "Bearer " + token,
                },
              });
              if (res?.data?.success) {
                showSuccessToast(
                  "Thao tác thành công, vui lòng kiểm tra thông tin"
                );
                onCreate(res.data.post);
              }
            } else {
              const res = await axios.put(apiUrl + "/post/" + state._id, req, {
                headers: {
                  Authorization: "Bearer " + token,
                },
              });
              if (res?.data?.success) {
                showSuccessToast(
                  "Thao tác thành công, vui lòng kiểm tra thông tin"
                );
                onUpdate(res.data.post);
                setState(null);
              }
            }
            document.getElementById("post__form").reset();
          })(data);
        },
      });
    })();
  }, [token, onCreate, state, onUpdate]);
  return (
    <div className="post__form">
      <h5>{(state && "Chỉnh sữa bài viết") || "Tạo bài viết mới"}</h5>
      {state && (
        <div className="post__create" onClick={() => setState(null)}>
          <i className="bx bx-plus bx-sm"></i>
          <span>Thêm mới</span>
        </div>
      )}
      <form id="post__form">
        <div className="form__group">
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={state?.title || ""}
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
            defaultValue={state?.tags?.join(" ") || ""}
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
            defaultValue={state?.description || ""}
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
