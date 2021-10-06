import React from "react";

const Detail = () => {
  return (
    <div className="grid body">
      <div className="dashboard__body__header">
        <h2>
          Sản phẩm/Chi tiết/ <small>Cà rốt</small>
        </h2>
        {/* <button className="btn">
          <i className="bx bx-plus-circle bx-sm bx-spin-hover"></i>&nbsp;Thêm
          mới
        </button> */}
      </div>
      <div className="row dashboard__body--min--height">
        <div className="col l-9 m-9 c-9">content</div>
        <div className="col l-3 m-3 c-3">nội dung</div>
      </div>
    </div>
  );
};

export default Detail;
