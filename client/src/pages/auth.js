import React, { useEffect } from "react";
import FormLogin from "./../components/auth/formLogin";
import FormSignup from "./../components/auth/formSignup";
import Panels from "../components/auth/panels";
import "./../components/utils/notification/message.css";
import "./../assets/css/auth.css";

function Auth() {
  let sign = " ";
  function onSignUpMode(data) {
    sign = data;
  }
  const handleSign = () => {
    const auth = document.querySelector(".auth");
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
      <div id="toast"></div>
      <div className="forms-auth">
        <div className="signin-signup">
          <FormLogin />
          <FormSignup />
        </div>
        <Panels onSignUpMode={onSignUpMode} />
      </div>
    </div>
  );
}

export default Auth;
