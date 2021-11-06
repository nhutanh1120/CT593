import React from "react";

const RoleItem = ({ data, roleValue, index }) => (
  <div className="col l-4 role__admin">
    <div
      className={(data.active && "tab__pane__role border") || "tab__pane__role"}
      onClick={() => roleValue(index)}
    >
      <span>{data.title}</span>
    </div>
  </div>
);

export default RoleItem;
