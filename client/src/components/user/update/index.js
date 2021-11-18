import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAgriculturalRequest } from "./../../../redux/actions/agriculturalActions";
import Validator from "./../../utils/validation/Vanilla";

const Update = ({ data, hideUpdate }) => {
  const id = data._id;
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      Validator({
        form: "#form__create__agricultural",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
          Validator.isRequired("#name", "Vui lòng nhập tên đầy đủ của bạn"),
          Validator.minLength("#name", 10),
          Validator.isRequired("#address", "Vui lòng nhập địa chỉ sản xuất"),
          Validator.minLength("#address", 10),
          Validator.isRequired(
            "#typeAgricultural",
            "Vui lòng chọn loại nông sản"
          ),
          Validator.isRequired("#nameBreed", "Vui lòng nhập tên nông sản"),
          Validator.isRequired(
            "#supplierBreed",
            "Vui lòng nhà cung cấp nông sản"
          ),
          Validator.isRequired("#timeBreed", "Vui lòng chọn thời gian"),
        ],
        onSubmit: function (data) {
          ((data) => {
            const producer = {
              name: data.name,
              address: data.address,
            };
            const breed = {
              typeAgricultural: data.typeAgricultural,
              nameBreed: data.nameBreed,
              supplierBreed: data.supplierBreed,
              timeBreed: data.timeBreed,
            };
            updateAgriculturalRequest(token, dispatch, producer, breed, id);
            hideUpdate(false);
          })(data);
        },
      });
    })();
  }, [token, dispatch, hideUpdate, id]);

  return (
    <div className="agricultural__create" onClick={() => hideUpdate(false)}>
      <form
        id="form__create__agricultural"
        className="form__create"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Tên hiển thị
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Tên hiển thị"
            className="form__control"
            defaultValue={data.producer.name ? data.producer.name : ""}
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="address" className="form__label">
            Đại chỉ sản xuất
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Địa chỉ sản xuất"
            className="form__control"
            defaultValue={data.producer.address ? data.producer.address : ""}
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="typeAgricultural" className="form__label">
            Loại nông sản
          </label>
          <select
            name="typeAgricultural"
            id="typeAgricultural"
            className="form__control"
            defaultValue={data.breed.typeAgricultural}
          >
            <option value="">- - Loại nông sản - -</option>
            <option value="0">Cây trồng</option>
            <option value="1">Vật nuôi</option>
          </select>
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="nameBreed" className="form__label">
            Tên nông sản
          </label>
          <input
            id="nameBreed"
            name="nameBreed"
            type="text"
            placeholder="Tên nông sản"
            className="form__control"
            defaultValue={data.breed.nameBreed ? data.breed.nameBreed : ""}
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="supplierBreed" className="form__label">
            Nhà cung cấp
          </label>
          <input
            id="supplierBreed"
            name="supplierBreed"
            type="text"
            placeholder="Nhà cung cấp"
            className="form__control"
            defaultValue={
              data.breed.supplierBreed ? data.breed.supplierBreed : ""
            }
          />
          <span className="form__message"></span>
        </div>
        <div className="form__group">
          <label htmlFor="timeBreed" className="form__label">
            Thời gian
          </label>
          <input
            id="timeBreed"
            name="timeBreed"
            type="date"
            placeholder="Thời gian"
            className="form__control"
            defaultValue={
              data.breed.timeBreed
                ? moment(data.breed.timeBreed).format("YYYY-MM-DD")
                : false
            }
          />
          <span className="form__message"></span>
        </div>
        <button className="form__submit">Cập nhật thông tin</button>
      </form>
    </div>
  );
};

export default Update;
