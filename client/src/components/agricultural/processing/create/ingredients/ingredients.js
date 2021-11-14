import React, { useState } from "react";
import "./style.css";

const initialState = {
  name: "",
  supplier: "",
};
const IngredientsItem = ({ data, index, onUpdate, onDelete }) => {
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <div
        className="ingredients__add"
        onClick={(e) =>
          e.target.parentElement.parentElement.lastElementChild.classList.add(
            "active"
          )
        }
      >
        <div className="ingredients__add__name">
          <input
            type="text"
            name="name"
            placeholder="Tên phụ liệu"
            onChange={handleChange}
            defaultValue={data.name}
          />
        </div>
        <div className="ingredients__add__supplier">
          <input
            type="text"
            name="supplier"
            placeholder="Nhà sản xuất"
            onChange={handleChange}
            defaultValue={data.supplier}
          />
        </div>
        <div className="ingredients__crud">
          <div
            className="ingredients__utils ingredients__update"
            onClick={(e) => {
              onUpdate(index, state);
              e.target.parentElement.parentElement.classList.remove("active");
            }}
          >
            <i className="bx bx-edit-alt"></i>
            <span>Cập nhật phụ liệu</span>
          </div>
          <div
            className="ingredients__utils ingredients__delete"
            onClick={() => onDelete(index)}
          >
            <i className="bx bx-trash"></i>
            <span>Xóa phụ liệu</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IngredientsItem;
