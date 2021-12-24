import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import handleMessage from "../../../utils/handle/message";
import profile from "./../../../../assets/img/profile.jpg";
import { handleLogout } from "./../sidebar/logout/handleLogout";
import Dropdown from "./dropdown/Dropdown";
import "./navbar.css";
import "./search.css";
import ThemeMenu from "./theme/";

const renderUserToggle = (user) => (
  <div className="navbar__profile--user">
    <div className="navbar__profile--user__image">
      <img
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = profile;
        }}
        src={user.image || profile}
        alt="img"
      />
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
    <div className="message-item message-item--center">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);
const renderNotificationItem = (item, index) => (
  <div className="message-item" key={index}>
    <i className={item.icon}></i>
    <div className="message-item-content">
      <span>
        <b>{item.title}</b>&nbsp;
        {item.content}
      </span>
      <small>{moment(item.time).fromNow()}</small>
    </div>
  </div>
);

const TopNavbar = ({ data, userMenu }) => {
  const [filter, setFilter] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleChange = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    if (data && searchWord) {
      const newFilter = data.filter((value) => {
        return value?.breed?.nameBreed
          .toLowerCase()
          .includes(searchWord.toLowerCase());
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

  /**
   * Get information personal
   */
  const auth = useSelector((state) => state.auth);
  const { user, role } = auth;

  const curr_user = {
    display_name: user.surname + " " + user.forename,
    image: user.avatar,
  };

  /**
   * handle data Message
   */
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const newMessage = user.message;
    if (newMessage) {
      const data = handleMessage(newMessage, 4);
      setMessage(data);
    }
  }, [user.message]);
  return (
    <div className="dashboard--navbar">
      <div className="dashboard--navbar__title">
        <h1>
          <i className={role === 1 ? "bx bx-star bx-sm" : "bx bx-user"}></i>
          &nbsp;{role === 1 ? "Quản trị viên" : "Người tiêu dùng"}
        </h1>
      </div>
      <div className="dashboard__mobile" onClick={() => alert("view sidebar")}>
        <i className="bx bx-menu bx-md"></i>
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
              <Link to={"/agricultural/manger/" + item._id} key={index}>
                <div>{item?.breed?.nameBreed}</div>
              </Link>
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
            badge={user?.message?.length || "0"}
            contentData={message}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">Xem tất cả</Link>}
          />
        </div>
        <div className="navbar__profile--item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={userMenu}
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
