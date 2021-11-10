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

const CreateRetailer = () => {
  const token = useSelector((state) => state.token);
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
          const id = "618b6eb359c8742b5fdbcc7b";
          (async (data) => {
            try {
              const res = await axios.post(
                apiUrl + "/agricultural/retailer/create",
                {
                  store: data.store,
                  address: data.address,
                  price: data.price,
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
  );
};

export default CreateRetailer;
