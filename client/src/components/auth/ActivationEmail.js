import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "./../utils/notification/Notification";

function ActivationEmail() {
  const { activation_token } = useParams();
  const [error, setErr] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            "http://localhost:4000/api/auth/activation",
            {
              activation_token,
            }
          );
          if (res) setSuccess("Tài khoản đã được kích hoạt!");
        } catch (error) {
          error.response.data.message && setErr("Xác thực không thành công!");
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div className="active_page">
      {error && showErrMsg(error)}
      {success && showSuccessMsg(success)}
    </div>
  );
}

export default ActivationEmail;
