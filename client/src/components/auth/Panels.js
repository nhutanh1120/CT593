import React from "react";
import log from "./../../assets/img/log.svg";
import register from "./../../assets/img/register.svg";

const Panels = ({ onSignUpMode }) => {
  return (
    <div>
      <div className="panels-auth">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => onSignUpMode(true)}
            >
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="img" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => onSignUpMode(false)}
            >
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Panels;
