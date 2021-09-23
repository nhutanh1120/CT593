import React from "react";
import { handleLogout } from "./handleLogout";

const Logout = ({ fullname, permission, avatar }) => {
  return (
    <li className="profile">
      <div className="profile-details">
        <img src={avatar} alt="profileImg" />
        <div className="name_job">
          <div className="name">{fullname}</div>
          <div className="job">{permission}</div>
        </div>
      </div>
      <i className="bx bx-log-out log_out" onClick={handleLogout}></i>
    </li>
  );
};

export default Logout;
