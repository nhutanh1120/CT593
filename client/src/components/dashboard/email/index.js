import React from "react";
import EmailBody from "./email";

function Email() {
  return (
    <div className="grid body">
      <h2 className="dashboard--body">Send mail</h2>
      <div className="row">
        <div className="col l-12">
          <EmailBody />
        </div>
      </div>
    </div>
  );
}

export default Email;
