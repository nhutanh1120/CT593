import React, { useState } from "react";

const initialState = {
  nameAction: "",
  supplierAction: "",
};
const ActionListCreate = ({ index, setData }) => {
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const Check = () => {
    let ok = true;
    if (state.nameAction === "") {
      document.getElementById("nameAction").innerText =
        "Vui lòng nhập tên sản phẩm";
      ok = false;
    }
    if (state.supplierAction === "") {
      document.getElementById("supplierAction").innerText =
        "Vui lòng nhập tên nhà cung cấp";
      ok = false;
    }
    return ok;
  };
  const handleKeyUp = (e) => {
    if (e.which === 13) {
      let ok = Check();
      if (ok === true) {
        setData(state);
        setState(initialState);
      }
    }
  };

  const handleSubmit = () => {
    let ok = Check();
    if (ok === true) {
      setData(state);
      setState(initialState);
    }
  };

  const handleInput = (e) => {
    e.target.nextElementSibling.innerText = "";
  };

  return (
    <div className="detail__action--tr">
      <span className="detail__action--td">{index}</span>
      <span className="detail__action--td">
        <input
          type="text"
          name="nameAction"
          value={state.nameAction}
          onChange={handleChange}
          onInput={handleInput}
          onKeyUp={handleKeyUp}
          placeholder="Vui lòng nhập tên sản phẩm"
        />
        <span id="nameAction" className="form__message"></span>
      </span>
      <span className="detail__action--td">
        <input
          type="text"
          name="supplierAction"
          value={state.supplierAction}
          onChange={handleChange}
          onInput={handleInput}
          onKeyUp={handleKeyUp}
          placeholder="Vui lòng nhập tên nhà cung cấp"
        />
        <span id="supplierAction" className="form__message"></span>
      </span>
      <div className="detail__action--delete" onClick={handleSubmit}>
        <i className="bx bx-plus"></i>
      </div>
    </div>
  );
};

export default ActionListCreate;
