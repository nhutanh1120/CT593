import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { createAgriculturalRequest } from "../../../redux/actions/agriculturalActions";
import Validator from "../../utils/validation/Vanilla";
import "./style.css";

const Create = (props) => {
  const { fullname, address } = useSelector((state) => state.auth.user);
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
            };
            const breed = {
              typeAgricultural: data.typeAgricultural,
              nameBreed: data.nameBreed,
              supplierBreed: data.supplierBreed,
              addressBreed: data.address,
              timeBreed: data.timeBreed,
            };
            createAgriculturalRequest(
              props.token,
              props.dispatch,
              producer,
              breed
            );
            props.hideCreate(false);
          })(data);
        },
      });
    })();
  }, [props]);

  return (
    <div
      className="agricultural__create"
      onClick={() => props.hideCreate(false)}
    >
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
            defaultValue={fullname ? fullname : ""}
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
            defaultValue={address ? address : ""}
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
          >
            <option value="">--Loại nông sản--</option>
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
          />
          <span className="form__message"></span>
        </div>
        <button className="form__submit">Tạo sản phẩm</button>
      </form>
    </div>
  );
};

export default Create;
