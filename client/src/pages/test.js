import React from "react";
import { showErrorToast } from "../components/utils/notification/message";

const test = () => {
  const abc = () => showErrorToast;
  abc();
  return (
    <div onClick={abc}>
      a<div id="toast"></div>
    </div>
  );
};

export default test;
