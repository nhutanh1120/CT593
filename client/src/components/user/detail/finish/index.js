import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { apiUrl } from "./../../../../constants";
import { updateAgricultural } from "./../../../../redux/actions/agriculturalActions";
import { dispatchPushMessage } from "./../../../../redux/actions/authAction";
import getBase64 from "./../../../utils/filebases64";
import { showSuccessToast } from "./../../../utils/notification/message";
import Validator from "./../../../utils/validation/Vanilla";
import "./style.css";

const Finish = (props) => {
  const token = useSelector((state) => state.token);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    (() => {
      Validator({
        form: "#form__success__agricultural",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
          Validator.isRequired("#times", "Vui lòng chọn thời gian thu hoạch"),
          Validator.isRequired(
            "#expiry",
            "Vui lòng nhập hạn sử dụng cho nông sản"
          ),
          Validator.isRequired("#images", "Vui lòng chọn hình ảnh sản phẩm"),
        ],
        onSubmit: function (data) {
          (async (data) => {
            let attachmentBases64;

            await getBase64(data.images[0]).then(
              (data) => (attachmentBases64 = data)
            );
            const req = {
              times: data.times,
              images: attachmentBases64,
              expiry: data.expiry, // Day
              description: data.description || "",
            };
            const res = await axios.patch(
              apiUrl + "/agricultural//producer/finish/" + id,
              req,
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
            );
            if (res?.data?.success) {
              showSuccessToast(
                "Thao tác thành công, vui lòng kiểm tra thông tin"
              );

              dispatch(updateAgricultural({ data: res.data.agricultural }));
              dispatch(dispatchPushMessage(res.data.notification));
              props.hideSuccess(false);
            }
          })(data);
        },
      });
    })();
  }, [props, id, dispatch, token]);
  return (
    <div className="finish__agricultural">
      <div
        className="finish__agricultural__hidden"
        onClick={() => props.hideSuccess(false)}
      ></div>
      <form id="form__success__agricultural" className="form__success">
        <div className="form__group">
          <label htmlFor="times" className="form__label">
            Thời gian thu hoạch
          </label>
          <input
            id="times"
            name="times"
            type="date"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="expiry" className="form__label">
            Hạn sử dụng
          </label>
          <input
            id="expiry"
            name="expiry"
            type="number"
            placeholder="Hạn sử dụng"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="images" className="form__label">
            Ảnh nông sản
          </label>
          <input
            id="images"
            name="images"
            type="file"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="description" className="form__label">
            Mô tả
          </label>
          <textarea
            name="description"
            id="description"
            className="form__control form__textarea"
          ></textarea>
          <span className="form__message"></span>
        </div>
        <button className="form__submit">Gửi kiểm duyệt</button>
      </form>
    </div>
  );
};

export default Finish;
