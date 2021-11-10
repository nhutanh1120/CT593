import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Validator from "../../utils/validation/Vanilla";

const initialState = {
  phone: "",
  address: "",
  social: "",
};
const ContactItem = ({ contact }) => {
  const [state, setState] = useState(initialState);
  const user = useSelector((state) => state.auth.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    contact({ ...state, [name]: value });
  };
  useEffect(() => {
    (() => {
      Validator({
        form: "#contact__form",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
          Validator.isRequired("#name", "Vui lòng nhập Tên của bạn"),
          Validator.minLength("#name", 5),
          Validator.isRequired("#surname", "Vui lòng nhập Họ của bạn"),
          Validator.isRequired("#phone", "Vui lòng chọn ngày sinh của bạn"),
        ],
      });
    })();
  }, []);
  return (
    <div>
      <form id="contact__form">
        <div className="grid wide">
          <div className="row">
            <div className="col l-6">
              <div className="form__group">
                <label className="form__label">
                  Email
                  <small>*</small>
                </label>
                <input
                  name="email"
                  type="text"
                  value={user.email}
                  className="form__control"
                  readOnly
                />
              </div>
            </div>
            <div className="col l-6">
              <div className="form__group">
                <label htmlFor="phone" className="form__label">
                  Số điện thoại<small>*</small>
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Số điện thoại của bạn"
                  type="number"
                  className="form__control"
                  onChange={handleChange}
                />
                <span className="form__message"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l-6">
              <div className="form__group pane__radio">
                <label htmlFor="address" className="form__label">
                  Địa chỉ liên hệ<small>*</small>
                </label>
                <input
                  id="address"
                  name="address"
                  placeholder="Họ của bạn"
                  type="text"
                  className="form__control"
                  onChange={handleChange}
                />
                <span className="form__message"></span>
              </div>
            </div>
            <div className="col l-6">
              <div className="form__group">
                <label htmlFor="social" className="form__label">
                  Mạng xã hội
                </label>
                <input
                  id="social"
                  name="social"
                  type="text"
                  placeholder="VD: https://facebook.com/..."
                  className="form__control"
                  onChange={handleChange}
                />
                <span className="form__message"></span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactItem;
