import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout } from "../../dashboard/sidebar/logout/handleLogout";
import profile from "./../../../../assets/img/profile.jpg";
import "./style.css";
import handleMessage from "./../../../utils/handle/message";

const MessageView = ({ item }) => (
  <div className="header__sign--item">
    <i className={item.icon}></i>
    <div className="header__message__content">
      <span>
        <b>{item.title}</b>&nbsp;
        {item.content}
      </span>
      <small>{moment(item.time).fromNow()}</small>
    </div>
  </div>
);

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const [fullName, setFullName] = useState(false);
  const { isAdmin, user } = auth;

  const [message, setMessage] = useState([]);
  useEffect(() => {
    if (user.message) {
      const data = handleMessage(user.message, 4);
      setMessage(data);
    }
  }, [user.message]);

  useEffect(() => {
    if (user.forename && user.surname)
      setFullName(user.forename + " " + user.surname);
  }, [user.forename, user.surname]);

  const handleView = (e) => {
    const hidden = document.querySelector(".header__hidden--view");
    if (!hidden) return;
    e.target.nextElementSibling.classList.toggle("active");
    hidden.style.display = "block";
  };
  const handleHidden = (e) => {
    const hidden = document.querySelector(".active");
    if (!hidden) return;
    hidden.classList.remove("active");
    e.target.style.display = "none";
  };

  return (
    <div className="header__sign">
      <div className="header__hidden--view" onClick={handleHidden}></div>
      <div className="header__sign__profile">
        <i className="bx bxs-bell-ring" onClick={handleView}></i>
        <div className="header__sign__dropdown">
          <div className="header__sign--title">
            <h5>Thông báo</h5>
            <span>Đánh dấu tất cả đã đọc</span>
          </div>
          {message.map((item, index) => (
            <MessageView item={item} key={index} />
          ))}
          {message && (
            <div className="header__message__content">
              <Link to="/user/dashboard">Xem tất cả</Link>
            </div>
          )}
        </div>
      </div>
      <div className="header__sign__profile">
        <img
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = profile;
          }}
          src={user.avatar || ""}
          alt="img"
          onClick={handleView}
        />
        <div className="header__sign__dropdown">
          <div className="header__sign--profile">
            <img
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = profile;
              }}
              src={user.avatar || "avatar"}
              alt="img"
            />
            <span>
              <h5>{fullName || "Chưa cập nhật"}</h5>
              <p>{"@" + user.email || "@luumoments@gmail.com"}</p>
            </span>
          </div>
          <Link to={isAdmin ? "/admin/dashboard" : "/user/dashboard"}>
            <div className="header__sign--item">
              <i className="bx bx-edit"></i>

              {isAdmin ? "Quản trị hệ thống" : "Sản phẩm của tôi"}
            </div>
          </Link>
          <Link
            to={
              isAdmin ? "/admin/dashboard/setting" : "/user/dashboard/setting"
            }
          >
            <div className="header__sign--item">
              <i className="bx bx-cog"></i>
              Cài đặt
            </div>
          </Link>
          <div className="header__sign--item" onClick={handleLogout}>
            <i className="bx bx-log-out-circle"></i>
            Đăng suất
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
