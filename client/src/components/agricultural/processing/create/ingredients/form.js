import React, { useState } from "react";
import "./style.css";

const initialState = {
  name: "",
  supplier: "",
};
const IngredientsFormCreate = ({ setData, onViewForm }) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleView = (e) => {
    e.target.parentElement.parentElement.lastElementChild.classList.add(
      "active"
    );
  };

  return (
    <>
      <div className="ingredients__add" onClick={handleView}>
        <div className="ingredients__add__name">
          <input
            type="text"
            name="name"
            placeholder="Tên phụ liệu"
            onChange={handleChange}
          />
        </div>
        <div className="ingredients__add__supplier">
          <input
            type="text"
            name="supplier"
            placeholder="Nhà sản xuất"
            onChange={handleChange}
          />
        </div>
        <div className="ingredients__crud">
          <div
            className="ingredients__utils ingredients__create"
            onClick={() => {
              setData(state);
              onViewForm(true);
            }}
          >
            <i className="bx bx-plus"></i>
            <span>Thêm phụ liệu</span>
          </div>
          <div
            className="ingredients__utils ingredients__delete"
            onClick={() => onViewForm(true)}
          >
            <i className="bx bx-trash"></i>
            <span>Xóa phụ liệu</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IngredientsFormCreate;
