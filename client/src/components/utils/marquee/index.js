import React from "react";
import "./style.css";

const Marquee = ({ title }) => {
  return (
    <div className="marquee">
      <div>
        Sản phẩm có ID <b>{title}</b> vừa thêm vào chuỗi cung ứng
      </div>
    </div>
  );
};

export default Marquee;
