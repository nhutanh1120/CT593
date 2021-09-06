import React, { useEffect } from "react";
import FormLogin from "./../components/auth/FormLogin";
import FormSignup from "./../components/auth/FormSignup";
import Panels from "./../components/auth/Panels";
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
    <div className="auth">
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
