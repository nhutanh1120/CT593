import React from "react";
import { useSelector } from "react-redux";
import EmailBody from "./address/email";
import FormEmail from "./form";
import "./style.css";
import TableEmail from "./table";

function Email() {
  const user = useSelector((state) => state.user);
  const data = [
    {
      username: "abc",
      surname: "Avs",
      email: "email1",
    },
    {
      username: "abc",
      surname: "Avs",
      email: "email2",
    },
    {
      username: "abc",
      surname: "Avs",
      email: "email3",
    },
    {
      username: "abc",
      surname: "Avs",
      email: "email4",
    },
    {
      username: "abc",
      surname: "Avs",
      email: "email5",
    },
    {
      username: "abc",
      surname: "Avs",
      email: "adabsdjasss",
    },
  ];
  return (
    <div className="grid body">
      <div className="dashboard__body__header">
        <h2>Gửi mail</h2>
      </div>
      <div className="row dashboard__email">
        <div className="col l-8">{<TableEmail customerList={data} />}</div>
        <div className="col l-4">
          <EmailBody />
          <FormEmail />
        </div>
      </div>
    </div>
  );
}

export default Email;
