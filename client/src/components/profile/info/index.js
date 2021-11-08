import React, { useEffect, useState } from "react";
import Validator from "../../utils/validation/Vanilla";
import "./style.css";

const initialState = {
  forename: "",
  surname: "",
  male: true,
  birthday: "",
};
const InfoItem = ({ info }) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    info({ ...state, [name]: value });
  };

  useEffect(() => {
    (() => {
      Validator({
        form: "#info__form",
        formGroupSelector: ".form__group",
        errorSelector: ".form__message",
        rules: [
          Validator.isRequired("#forename", "Vui lòng nhập Tên của bạn"),
          Validator.minLength("#forename", 5),
          Validator.isRequired("#surname", "Vui lòng nhập Họ của bạn"),
          Validator.isRequired("#birthday", "Vui lòng chọn ngày sinh của bạn"),
        ],
      });
    })();
  }, []);
  return (
    <div className="tab__pane__info">
      <form id="info__form">
        <div className="grid wide">
          <div className="row">
            <div className="col l-6">
              <div className="form__group">
                <label htmlFor="name" className="form__label">
                  Tên của bạn
                  <small>*</small>
                </label>
                <input
                  id="forename"
                  name="forename"
                  placeholder="Tên của bạn"
                  type="text"
                  className="form__control"
                  onChange={handleChange}
                />
                <span className="form__message"></span>
              </div>
            </div>
            <div className="col l-6">
              <div className="form__group">
                <label htmlFor="surname" className="form__label">
                  Họ của bạn<small>*</small>
                </label>
                <input
                  id="surname"
                  name="surname"
                  placeholder="Họ của bạn"
                  type="text"
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
                <label className="form__label">Giới tính</label>
                <div className="form__group__radio">
                  <input
                    id="male"
                    name="male"
                    type="radio"
                    value="true"
                    onChange={handleChange}
                    defaultChecked
                  />
                  <label htmlFor="male">Nam</label>
                  <input
                    id="female"
                    name="male"
                    type="radio"
                    value="false"
                    onChange={handleChange}
                  />
                  <label htmlFor="female">Nữ</label>
                </div>
              </div>
            </div>
            <div className="col l-6">
              <div className="form__group">
                <label htmlFor="birthday" className="form__label">
                  Sinh nhật<small>*</small>
                </label>
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
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

export default InfoItem;
