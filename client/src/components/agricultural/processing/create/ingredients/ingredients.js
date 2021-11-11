import React, { useState } from "react";
import "./style.css";

const initialState = {
  name: "",
  supplier: "",
};
const Ingredients = ({ setData, onDelete }) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleViewDelete = () => {
    document.querySelector(".ingredients__delete").classList.add("active");
  };
  const handleHiddenDelete = () => {
    document.querySelector(".ingredients__delete").classList.remove("active");
    setData(state);
    onDelete(true);
  };

  return (
    <>
      <div className="ingredients__add" onClick={handleViewDelete}>
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
        <div className="ingredients__delete" onClick={() => onDelete(true)}>
          <i className="bx bx-trash"></i>
          <span>Xóa phụ liệu</span>
        </div>
      </div>
      <div className="hidden" onClick={handleHiddenDelete}></div>
    </>
  );
};

export default Ingredients;
