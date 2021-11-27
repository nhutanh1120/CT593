import React from "react";

const ActionListItem = ({ data, index, setDelete }) => {
  return (
    <div className="detail__action--tr">
      <span className="detail__action--th">{index + 1}</span>
      <span className="detail__action--th">{data.nameAction}</span>
      <span className="detail__action--th">{data.supplierAction}</span>
      <span className="detail__action--th">{data.isolation}</span>
      <div className="detail__action--delete" onClick={() => setDelete(index)}>
        <i className="bx bx-trash"></i>
      </div>
    </div>
  );
};

export default ActionListItem;
