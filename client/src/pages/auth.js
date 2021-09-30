import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./../assets/css/auth.css";
import FormLogin from "./../components/auth/formLogin";
import FormSignup from "./../components/auth/formSignup";
import Panels from "./../components/auth/panels";

function Auth() {
  let sign = " ";
  function onSignUpMode(data) {
    sign = data;
  }
  const handleSign = () => {
    const auth = document.querySelector(".auth");
    if (!auth) return;
    auth.classList.toggle("sign-up-mode");
  };
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");

    sign_up_btn.onclick = handleSign;
    sign_in_btn.onclick = handleSign;
  }, [sign]);

  return (
    <div className="App auth">
      <Link to="/" className="transparent btn__sign">
        Trang chủ
      </Link>
      <div id="toast"></div>
      <div className="forms--auth">
        <div className="signin--signup">
          <FormLogin />
          <FormSignup />
        </div>
        <Panels onSignUpMode={onSignUpMode} />
      </div>
    </div>
  );
}

export default Auth;
