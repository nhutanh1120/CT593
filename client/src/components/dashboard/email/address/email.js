import React, { useState } from "react";
import { isEmail } from "./../../../utils/validation/Validation";
import "./email.css";

const initialState = {
  items: [],
  value: "",
  error: null,
};
const EmailBody = ({ dataFormEmail }) => {
  const [state, setState] = useState(initialState);

  const { items, value, error } = state;

  const handleChange = (evt) => {
    setState({
      ...state,
      value: evt.target.value,
      error: null,
    });
  };

  const handleKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      let email = value.trim();

      if (email && isValid(email)) {
        setState({
          ...state,
          items: [...items, email],
          value: "",
        });
        dataFormEmail([...state.items, email]);
      }
    }
  };

  const handleDelete = (item) => {
    setState({
      ...state,
      items: items.filter((i) => i !== item),
    });
  };

  const handlePaste = (evt) => {
    evt.preventDefault();

    let paste = evt.clipboardData.getData("text");
    // eslint-disable-next-line
    const reg = new RegExp(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);
    let emails = paste.match(reg);

    if (emails) {
      let toBeAdded = emails.filter((email) => !isInList(email));

      setState({
        ...state,
        items: [...items, ...toBeAdded],
      });
    }
  };

  const isValid = (email) => {
    let error = null;

    if (isInList(email)) {
      error = email + " đã được thêm.";
    }

    if (!isEmail(email)) {
      error = email + " không đúng định dạng.";
    }

    if (error) {
      setState({
        ...state,
        error,
      });
      return false;
    }
    return true;
  };

  const isInList = (email) => {
    return items.includes(email);
  };

  return (
    <div className="add--email">
      {items.map((item, index) => (
        <div className="tag--item" key={index}>
          {item}
          <button
            type="button"
            className="button"
            onClick={() => handleDelete(item)}
          >
            &times;
          </button>
        </div>
      ))}

      <input
        className={"input " + (error && " has-error")}
        value={value}
        placeholder="Nhập hoặc dán địa chỉ email và nhấn `Enter` ..."
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onPaste={handlePaste}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default EmailBody;
