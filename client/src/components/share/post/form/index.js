import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "./../../../../constants/index";
import { dispatchPushMessage } from "./../../../../redux/actions/authAction";
import getBase64 from "./../../../utils/filebases64";
import { showSuccessToast } from "./../../../utils/notification/message";
import Validator from "./../../../utils/validation/Vanilla";
import "./style.css";

const FormPost = ({ onCreate, dataUpdate, onUpdate }) => {
  const [state, setState] = useState(false);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (dataUpdate) {
      setState(dataUpdate);
    }
  }, [dataUpdate]);

  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
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
                const { _id } = res.data.post;
                const data = {
                  ...res.data.post,
                  author: {
                    _id,
                    forename: user.forename,
                    surname: user.surname,
                  },
                };
                onCreate(data);
                dispatch(dispatchPushMessage(res.data.notification));
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
                const { _id } = res.data.post._id;
                const data = {
                  ...res.data.post,
                  author: {
                    _id,
                    forename: user.forename,
                    surname: user.surname,
                  },
                };
                onUpdate(data);
                setState(null);
                dispatch(dispatchPushMessage(res.data.notification));
              }
            }
            document.getElementById("post__form").reset();
          })(data);
        },
      });
    })();
  }, [token, onCreate, state, onUpdate, user, dispatch]);
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
