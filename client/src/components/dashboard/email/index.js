import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EmailBody from "./address/email";
import FormEmail from "./form";
import "./style.css";
import TableEmail from "./table";

function Email() {
  const users = useSelector((state) => state.users);
  const [state, setState] = useState([]);

  useEffect(() => {
    const newArray = [];
    users.map((item) => {
      const newObject = {
        username: item.username,
        surname: `${item.surname} ${item.forename}`,
        email: item.email,
      };
      newArray.push(newObject);
      return newArray;
    });
    setState(newArray);
  }, [users]);

  return (
    <div className="grid body">
      <div className="dashboard__body__header">
        <h2>Gửi mail</h2>
      </div>
      <div className="row dashboard__email">
        <div className="col l-8">{<TableEmail customerList={state} />}</div>
        <div className="col l-4">
          <EmailBody />
          <FormEmail />
        </div>
      </div>
    </div>
  );
}

export default Email;
