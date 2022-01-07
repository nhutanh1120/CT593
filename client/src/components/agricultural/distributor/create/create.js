import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { apiUrl, GTIN, LENGTH } from "../../../../constants";
import {
  showErrorToast,
  showSuccessToast,
} from "./../../../utils/notification/message";
import Validator from "./../../../utils/validation/Vanilla";
import "./style.css";

const CreateDistributor = () => {
  const token = useSelector((state) => state.token);
  const history = useHistory();
  const { id } = useParams();
  let idNew = id.slice(id.lastIndexOf(GTIN) + LENGTH, id.length);
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
          (async (data) => {
            try {
              const res = await axios.post(
                apiUrl + "/agricultural/distributor/create",
                {
                  start: data.start,
                  end: data.end,
                  id: idNew,
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
  }, [token, idNew]);
  return (
    <div className="app__create__distributor">
      <div id="toast"></div>
      <button
        className="agricultural__undo__button"
        onClick={() => history.goBack()}
      >
        Quay lại
        <i className="bx bx-undo"></i>
      </button>
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
              placeholder="Vui lòng nhập địa chỉ"
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
              placeholder="Vui lòng nhập địa chỉ"
              className="form__control"
            />
            <span className="form__message"></span>
          </div>
          <button className="form__submit">Gửi</button>
        </form>
      </div>
    </div>
  );
};

export default CreateDistributor;
