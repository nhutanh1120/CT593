import React from "react";
import { handleLogout } from "../../dashboard/sidebar/logout/handleLogout";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const { isAdmin } = auth;

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
          <div className="header__sign--item">abcas</div>
        </div>
      </div>
      <div className="header__sign__profile">
        <img
          src="https://lh3.googleusercontent.com/a/AATXAJxhGKESfjpB3GAyNxIQpsheKl74w2Qq6ylZ4MfE=s96-c"
          alt="img"
          onClick={handleView}
        />
        <div className="header__sign__dropdown">
          <div className="header__sign--profile">
            <img
              src="https://lh3.googleusercontent.com/a/AATXAJxhGKESfjpB3GAyNxIQpsheKl74w2Qq6ylZ4MfE=s96-c"
              alt="img"
            />
            <span>
              <h5>Lưu Trần Anh nhựt</h5>
              <p>@nhutanh@gmail.com</p>
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
