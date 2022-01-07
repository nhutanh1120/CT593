import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { apiUrl, GTIN, LENGTH } from "../../../../constants";
import {
  showErrorToast,
  showSuccessToast,
} from "./../../../utils/notification/message";
import Validator from "./../../../utils/validation/Vanilla";
import "./style.css";

const CreateRetailer = () => {
  const token = useSelector((state) => state.token);
  const { id } = useParams();
  const history = useHistory();
  let idNew = id.slice(id.lastIndexOf(GTIN) + LENGTH, id.length);

  useEffect(() => {
    (() => {
      Validator({
        form: "#create__retailer",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
          Validator.isRequired("#store", "Vui lòng nhập tên cửa hàng."),
          Validator.minLength("#store", 5),
          Validator.isRequired("#address", "Vui lòng nhập địa chỉ."),
          Validator.minLength("#address", 15),
          Validator.isRequired("#price", "Vui lòng nhập giá sản phẩm."),
        ],
        onSubmit: function (data) {
          (async (data) => {
            try {
              const res = await axios.post(
                apiUrl + "/agricultural/retailer/create",
                {
                  store: data.store,
                  address: data.address,
                  price: data.price,
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
    <div className="app__create__retailer">
      <div id="toast"></div>
      <button
        className="agricultural__undo__button"
        onClick={() => history.goBack()}
      >
        Quay lại
        <i className="bx bx-undo"></i>
      </button>
      <div className="create__retailer">
        <form id="create__retailer">
          <h2>bán lẻ sản phẩm</h2>
          <div className="form__group">
            <label htmlFor="store" className="form__label">
              Tên cửa hàng
            </label>
            <input
              id="store"
              name="store"
              type="text"
              placeholder="Tên cửa hàng bán sản phấm"
              className="form__control"
            />
            <span className="form__message"></span>
          </div>
          <div className="form__group">
            <label htmlFor="address" className="form__label">
              Địa chỉ
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Đại chỉ bán sản phấm"
              className="form__control"
            />
            <span className="form__message"></span>
          </div>
          <div className="form__group">
            <label htmlFor="price" className="form__label">
              Giá sản phẩm
            </label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="VD: 20000"
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

export default CreateRetailer;
