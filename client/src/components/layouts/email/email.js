import React, { useState } from "react";
import { isEmail, isEmpty } from "../../utils/validation/Validation";
import "./styles.css";

const initialState = {
  email: "",
};
function Email() {
  const [state, setState] = useState(initialState);
  const { email } = state;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ [name]: value });
  };
  const handleInput = () => {
    const error = document.querySelector(".message__error__email");
    if (!error) return;
    error.innerText = "";
  };
  const handleBlurInput = () => {
    const error = document.querySelector(".message__error__email");
    if (!error) return;
    if (isEmpty(email)) {
      error.innerText = "Vui lòng nhập email.";
    }
    if (!isEmail(email)) {
      error.innerText = "Vui lòng nhập email đúng định dạng.";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleBlurInput();
  };
  return (
    <div className="grid wide email--padding">
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <div className="search__email email">
            <div className="search__header">
              <h2>Là Người Đầu Tiên</h2>
              <p>
                Nhận tin tức mới nhất, lời mời và ưu đãi trực tiếp đến thư của
                bạn.
              </p>
              <hr />
            </div>
            <div className="search__email--input">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="email"
                  placeholder="Email của bạn"
                  onChange={handleChangeInput}
                  onBlur={handleBlurInput}
                  onInput={handleInput}
                />
                <input type="submit" value="Đăng ký" />
                <div className="alert--error">
                  <small className="message__error__email"></small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
