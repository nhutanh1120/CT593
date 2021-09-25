import React from "react";
import "./../components/utils/notification/message.css";
import {
  showErrorToast,
  showSuccessToast,
} from "./../components/utils/notification/message";

const Test = () => {
  return (
    <div>
      <div id="toast"></div>
      <div>
        <div onClick={showSuccessToast} className="btn--message btn--success">
          Show success toast
        </div>
        <div onClick={showErrorToast} className="btn--message btn--danger">
          Show error toast
        </div>
      </div>
    </div>
  );
};

export default Test;
