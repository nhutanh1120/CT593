import React from "react";
import "./style.css";

const Empty = () => {
  return (
    <div className="col l-3 m-6 c-12">
      <div className="empty">
        <span>
          <i className="bx bx-heart"></i>
          <p>Không có dử liệu</p>
        </span>
      </div>
    </div>
  );
};

export default Empty;
