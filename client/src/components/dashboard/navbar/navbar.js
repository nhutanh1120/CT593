import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import notifications from "../../../assets/JsonData/notification.json";
import user_image from "../../../assets/img/bg.jpg";
import user_menu from "../../../assets/JsonData/user_menu.json";
import "./navbar.css";
// import ThemeMenu from "../thememenu/ThemeMenu";

const curr_user = {
  display_name: "Nhut Anh",
  image: user_image,
};

const renderUserToggle = (user) => (
  <div className="navbar__profile--user">
    <div className="navbar__profile--user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="navbar__profile--user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="message-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);
const renderNotificationItem = (item, index) => (
  <div className="message-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const TopNavbar = ({ data }) => {
  const [filter, setFilter] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleChange = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilter([]);
    } else {
      setFilter(newFilter);
    }
  };

  const clearInput = () => {
    setFilter([]);
    setWordEntered("");
  };

  return (
    <div className="dashboard--navbar">
      <div className="dashboard--navbar__title">
        <h1>Quản trị viên</h1>
      </div>
      <div className="dashboard--navbar__search">
        <div className="search__input">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            onChange={handleChange}
            value={wordEntered}
          />

          {filter.length === 0 ? (
            <i className="bx bx-search"></i>
          ) : (
            <div onClick={clearInput}>X</div>
          )}
        </div>
        {filter.length !== 0 && (
          <div className="search__result">
            {filter.slice(0, 15).map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </div>
        )}
      </div>
      <div className="dashboard--navbar__profile">
        <div className="navbar__profile--item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="navbar__profile--item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="navbar__profile--item">{/* <ThemeMenu /> */}</div>
      </div>
    </div>
  );
};

export default TopNavbar;
