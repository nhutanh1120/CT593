import React, { useState } from "react";
import profile from "./../../../assets/img/profile.jpg";
import "./style.css";

const initialState = {
  img: "",
};
const AvatarItem = () => {
  const [state, setState] = useState(initialState);
  const handleSubmit = () => {
    alert("submit");
  };
  const handleChange = (e) => {
    const { name, files } = e.target;
    setState({ [name]: URL.createObjectURL(files[0]) });
  };
  return (
    <div className="pane__avatar">
      <div className="pane__avatar--img">
        <img
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = profile;
          }}
          src={state.img}
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="file" className="form__label">
            Ảnh đại diện
            <small>*</small>
          </label>
          <input
            id="file"
            name="img"
            type="file"
            className="form__control"
            onChange={handleChange}
          />
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default AvatarItem;
