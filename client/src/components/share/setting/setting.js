import React from "react";
import Permission from "../profile/permission/permission";
import Profile from "../profile/profile";

function Setting() {
  return (
    <div className="grid body">
      <div className="dashboard__body__header">
        <h2>Quản lý người dùng</h2>
      </div>
      <div className="row">
        <div className="col l-3">{<Permission />}</div>
        <div className="col l-8">{<Profile />}</div>
      </div>
    </div>
  );
}

export default Setting;
