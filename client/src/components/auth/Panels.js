import React from "react";
import log from "./../../assets/img/log.svg";
import register from "./../../assets/img/register.svg";

const Panels = ({ onSignUpMode }) => {
  return (
    <div>
      <div className="panels--auth">
        <div className="panel left--panel">
          <div className="content">
            <h3>Bạn chưa có tài khoản ?</h3>
            <p>
              Bạn muốn đăng nhập với một vai trò khác, hãy đăng ký tài khoản
              mới. Nhấn vào đây!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => onSignUpMode(true)}
            >
              Đăng ký
            </button>
          </div>
          <img src={log} className="image" alt="img" />
        </div>
        <div className="panel right--panel">
          <div className="content">
            <h3>Bạn đã có tài khoản ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => onSignUpMode(false)}
            >
              Đăng nhập
            </button>
          </div>
          <img src={register} className="image" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Panels;
