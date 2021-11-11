import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  showErrorToast,
  showSuccessToast,
} from "./../../../utils/notification/message";
import Validator from "./../../../utils/validation/Vanilla";
import "./style.css";
import { apiUrl } from "../../../../constants";
import { useSelector } from "react-redux";
import Ingredients from "./ingredients/ingredients";

const CreateProcessing = () => {
  const token = useSelector((state) => state.token);
  useEffect(() => {
    (() => {
      Validator({
        form: "#create__processing",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
          Validator.isRequired("#name", "Vui lòng nhập tên cửa hàng."),
          Validator.isRequired("#date", "Vui lòng nhập địa chỉ."),
          Validator.isRequired("#expiry", "Vui lòng nhập địa chỉ."),
          Validator.isRequired("#images", "Vui lòng nhập giá sản phẩm."),
        ],
        onSubmit: function (data) {
          console.log(data);
          const id = "618b6eb359c8742b5fdbcc7b";
          // (async (data) => {

          //   try {
          //     const res = await axios.post(
          //       apiUrl + "/agricultural/processing/create",
          //       {
          //         store: data.store,
          //         address: data.address,
          //         price: data.price,
          //         id,
          //       },
          //       {
          //         headers: { Authorization: "Bearer " + token },
          //       }
          //     );
          //     if (res.data.success) {
          //       showSuccessToast(
          //         "Thao tác thành công, vui lòng kiểm tra thông tin."
          //       );
          //     }
          //   } catch (error) {
          //     error.response.data.message &&
          //       showErrorToast("Thao tác thất bại, vui lòng thử lại sau.");
          //   }
          // })(data);
        },
      });
    })();
  }, [token]);
  const [addIngredients, setAddIngredients] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const onDelete = () => setAddIngredients(false);
  const setData = (data) => {
    let newArray = [...ingredients];
    newArray.push(data);
    setIngredients(newArray);
  };
  console.log(ingredients);
  return (
    <div className="create__processing">
      <form id="create__processing">
        <h2>Chế biến sản phẩm</h2>
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Tên sản phẩm
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Tên cửa hàng bán sản phấm"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="date" className="form__label">
            Ngày sản xuất
          </label>
          <input
            id="date"
            name="date"
            type="text"
            placeholder="Đại chỉ bán sản phấm"
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
            placeholder="VD: 20"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="images" className="form__label">
            Hình ảnh sản phẩm
          </label>
          <input
            id="images"
            name="images"
            type="file"
            className="form__control"
          />
          <span className="form__message"></span>
        </div>
        {addIngredients && (
          <Ingredients setData={setData} onDelete={onDelete} />
        )}
        <div
          className="form__group__add"
          onClick={() => setAddIngredients(true)}
        >
          <div className="form__group__add--title">
            <i className="bx bx-clipboard bx-sm"></i>
          </div>
          <h2>Thêm phụ liệu</h2>
          <small>Thêm phụ liệu vào sản phẩm của bạn.</small>
        </div>
        <button className="form__submit">Gửi</button>
      </form>
    </div>
  );
};

export default CreateProcessing;
