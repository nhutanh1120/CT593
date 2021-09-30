import React, { useState } from "react";
import { Link } from "react-router-dom";
import user_image from "./../../../assets/img/bg.jpg";
import notifications from "./../../../assets/JsonData/notification.json";
import user_menu from "./../../../assets/JsonData/user_menu.json";
import Dropdown from "./../dropdown/Dropdown";
import ThemeMenu from "./../thememenu/ThemeMenu";
import { handleLogout } from "./../sidebar/logout/handleLogout";
import "./navbar.css";
import "./search.css";

const curr_user = {
  display_name: "Nhut Anh",
  image: user_image,
};

const renderUserToggle = (user) => (
  <div className="navbar__profile--user">
    <div className="navbar__profile--user__image">
      <img src={user.image} alt="img" />
    </div>
    <div className="navbar__profile--user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link
    to={item.path}
    key={index}
    onClick={item?.event ? handleLogout : () => true}
  >
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
    if (data && searchWord) {
      const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
        setFilter([]);
      } else {
        setFilter(newFilter);
      }
    }
    if (!data && searchWord) {
      const newFilter = "Không có dử liệu để tìm!";
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
            <i onClick={clearInput} className="bx bx-x"></i>
          )}
        </div>
        {typeof filter !== "string" && filter.length !== 0 && (
          <div className="search__result">
            {filter.slice(0, 15).map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </div>
        )}
        {typeof filter == "string" && (
          <div className="search__result search__none">
            <div>{filter}</div>
          </div>
        )}
      </div>
      <div className="dashboard--navbar__profile">
        <div className="navbar__profile--item">
          <Dropdown
            icon="bx bx-bell bx-tada-hover"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="navbar__profile--item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="navbar__profile--item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
