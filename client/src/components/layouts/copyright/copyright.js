import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CopyRight = (props) => {
  const year = new Date().getFullYear();
  return (
    <div className={props.styles ? "grid copyright--bottom" : "grid"}>
      <div
        className={
          props.styles
            ? "col l-12 c-12 m-12 copyright--dashboard"
            : "col l-12 c-12 m-12 copyright"
        }
      >
        Bản quyền thiết kế thuộc về &copy;&nbsp;
        <Link
          to="mailto:ltanhutd20086@cusc.ctu.edu.vn"
          title="Lưu Trần Anh Nhựt"
        >
          Lưu Trần Anh Nhựt
        </Link>
        &nbsp;{year}
      </div>
    </div>
  );
};

export default CopyRight;
