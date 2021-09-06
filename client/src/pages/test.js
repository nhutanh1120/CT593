import React from "react";
// import { showErrorToast } from "../components/utils/notification/message";
import Message from "../components/utils/notification/message";
import "./../components/utils/notification/message.css";

const test = () => {
  return (
    <div>
      <div id="toast"></div>
      <Message />
    </div>
  );
};

export default test;
