import React, { useState } from "react";
import profile from "./../../../../../assets/img/profile.jpg";
import { handleLogout } from "./handleLogout";

const Logout = ({ fullname, permission, avatar }) => {
  const [state, setState] = useState(fullname);
  if (state.length > 18) {
    const name = state.slice(0, 15) + "...";
    setState(name);
  }
  return (
    <li className="profile">
      <div className="profile-details">
        <img
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = profile;
          }}
          src={avatar || profile}
          alt="profile"
        />
        <div className="name_job">
          <div className="name">{state}</div>
          <div className="job">{permission}</div>
        </div>
      </div>
      <i className="bx bx-log-out log_out" onClick={handleLogout}></i>
    </li>
  );
};

export default Logout;
