import React from "react";
import EmailBody from "./email";
import FormEmail from "./form";
import "./style.css";

function Email() {
  return (
    <div className="grid body">
      <div className="dashboard__body__header">
        <h2>Gửi mail</h2>
      </div>
      <div className="row dashboard__email">
        <div className="col l-8"></div>
        <div className="col l-4">
          <EmailBody />
          <FormEmail />
        </div>
      </div>
    </div>
  );
}

export default Email;
