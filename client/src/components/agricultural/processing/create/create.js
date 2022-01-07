import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { apiUrl, LENGTH, GTIN } from "./../../../../constants";
import getBase64 from "./../../../utils/filebases64";
import {
  showErrorToast,
  showSuccessToast,
} from "./../../../utils/notification/message";
import Validator from "./../../../utils/validation/Vanilla";
import IngredientsFormCreate from "./ingredients/form";
import IngredientsItem from "./ingredients/ingredients";
import "./style.css";

const CreateProcessing = () => {
  const { id } = useParams();
  let idNew = id.slice(id.lastIndexOf(GTIN) + LENGTH, id.length);
  const history = useHistory();
  const [ingredients, setIngredients] = useState([]);

  const [viewForm, setViewForm] = useState(false);
  const onViewForm = () => setViewForm(false);

  const onCreate = (data) => {
    let newArray = [...ingredients];
    newArray.push(data);
    setIngredients(newArray);
  };
  const onDelete = (index) => {
    let newArray = [...ingredients];
    newArray.splice(index, 1);
    setIngredients(newArray);
  };
  const onUpdate = (index, data) => {
    let newArray = [...ingredients];
    newArray[index] = data;
    setIngredients(newArray);
  };

  const token = useSelector((state) => state.token);
  useEffect(() => {
    (() => {
      Validator({
        form: "#create__processing",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
          Validator.isRequired("#name", "Vui lòng nhập tên sản phẩm."),
          Validator.isRequired("#date", "Vui lòng nhập ngày sản xuất."),
          Validator.isRequired("#expiry", "Vui lòng nhập hạn sử dụng."),
          Validator.isRequired("#images", "Vui lòng chọn hình ảnh sản phẩm."),
        ],
        onSubmit: function (data) {
          (async (data) => {
            let images;
            await getBase64(data.images[0]).then((data) => (images = data));
            const processing = {
              id: idNew,
              nameProduct: data.name,
              images: images,
              dateManufacture: data.date,
              expiry: data.expiry,
              ingredients: ingredients || [],
            };
            try {
              const res = await axios.post(
                apiUrl + "/agricultural/processing/create",
                processing,
                {
                  headers: { Authorization: "Bearer " + token },
                }
              );
              console.log(res.data);
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
  }, [token, ingredients, idNew]);
  return (
    <div className="app__create__processing">
      <div id="toast"></div>
      <button
        className="agricultural__undo__button"
        onClick={() => history.goBack()}
      >
        Quay lại
        <i className="bx bx-undo"></i>
      </button>
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
              type="date"
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
          {ingredients &&
            ingredients.map((item, index) => (
              <IngredientsItem
                key={index}
                index={index}
                data={item}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))}
          {viewForm && (
            <IngredientsFormCreate setData={onCreate} onViewForm={onViewForm} />
          )}
          <div className="form__group__add" onClick={() => setViewForm(true)}>
            <div className="form__group__add--title">
              <i className="bx bx-clipboard bx-sm"></i>
            </div>
            <h2>Thêm phụ liệu</h2>
            <small>Thêm phụ liệu vào sản phẩm của bạn.</small>
          </div>
          <button className="form__submit">Gửi</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProcessing;
