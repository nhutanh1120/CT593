import React, { useState } from "react";

const Update = ({ data, hideUpdate }) => {
  const [state, setState] = useState(null);
  if (state) hideUpdate(false);
  console.log(data.producer);
  return (
    <div className="agricultural__create" onClick={() => setState(true)}>
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
            defaultValue={data.producer.name ? data.name : ""}
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
            defaultValue={data.producer.address ? data.address : ""}
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
        <button className="form__submit">Cập nhật thông tin</button>
      </form>
    </div>
  );
};

export default Update;
