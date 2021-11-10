import axios from "axios";
import React, { useEffect } from "react";
import {
  showErrorToast,
  showSuccessToast,
} from "./../../../utils/notification/message";
import Validator from "./../../../utils/validation/Vanilla";
import "./style.css";
import { apiUrl } from "../../../../constants";
import { useSelector } from "react-redux";

const CreateDistributor = () => {
  const token = useSelector((state) => state.token);
  useEffect(() => {
    (() => {
      Validator({
        form: "#create__distributor",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
          Validator.isRequired("#start", "Vui lòng nhập địa chỉ."),
          Validator.minLength("#start", 15),
          Validator.isRequired("#end", "Vui lòng nhập địa chỉ."),
          Validator.minLength("#end", 15),
        ],
        onSubmit: function (data) {
          const id = "618b6eb359c8742b5fdbcc7b";
          (async (data) => {
            try {
              const res = await axios.post(
                apiUrl + "/agricultural/distributor/create",
                {
                  start: data.start,
                  end: data.end,
                  id,
                },
                {
                  headers: { Authorization: "Bearer " + token },
                }
              );
              if (res.data.success) {
                showSuccessToast(
                  "Thao tác thành công, vui lòng kiểm tra thông tin."
                );
              }
            } catch (error) {
              error.response.data.message &&
                showErrorToast("Thao tác thất bại, vui lòng thử lại sau.");
            }
          })(data);
        },
      });
    })();
  }, [token]);
  return (
    <div className="create__distributor">
      <form id="create__distributor">
        <h2>Phân phối nông sản</h2>
        <div className="form__group">
          <label htmlFor="start" className="form__label">
            Địa chỉ bắt đầu
          </label>
          <input
            id="start"
            name="start"
            type="text"
            placeholder="VD: "
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="end" className="form__label">
            Địa chỉ đến
          </label>
          <input
            id="end"
            name="end"
            type="text"
            placeholder="VD: Nhựt Lưu"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <button className="form__submit">Gửi</button>
      </form>
    </div>
  );
};

export default CreateDistributor;
