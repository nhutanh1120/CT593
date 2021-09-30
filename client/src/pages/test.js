import React from "react";

const Agricultural = () => {
  return (
    <div>
      <div className="grid wide">
        <div className="row">
          <div className="col l-4">
            <form>
              <div className="form__group">
                <label htmlFor="fullname" className="form__label">
                  Tên đầy đủ
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="VD: Nhựt Lưu"
                  className="form__control"
                />
                <span className="form__message"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agricultural;
