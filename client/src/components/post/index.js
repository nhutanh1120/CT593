import axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { apiUrl } from "../../constants";
import img from "./../../assets/img/home.png";
import "./style.css";
import {
  showErrorToast,
  showSuccessToast,
} from "../utils/notification/message";

const dropdown = [
  {
    class: "bx bxl-facebook-circle",
    content: "Chia sẻ lên facebook",
  },
  {
    class: "bx bxl-twitter",
    content: "Chia sẻ lên twitter",
  },
  {
    class: "bx bx-link",
    content: "Sao chép liên kết",
  },
  {
    class: "bx bxs-flag-alt",
    content: "Báo cáo bài viết",
  },
];
const PostItem = ({ data, path, onDelete }) => {
  const handleClick = (e) => {
    if (!e.target.nextElementSibling) return;
    e.target.nextElementSibling.classList.toggle("active");
    document.querySelector(".post__card__hidden").style.display = "block";
  };
  const handleHidden = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.style.display = "none";
  };

  const token = useSelector((state) => state.token);
  const [state, setState] = useState(data.likeCount);
  const [status, setStatus] = useState(false);
  const user = useSelector((state) => state.auth.user._id);

  useEffect(() => {
    if (state?.length > 0) {
      const isStatus = state.some((state) => state === user);
      setStatus(isStatus);
    }
  }, [state, user]);

  const handleLikePost = async () => {
    if (!token || !user) {
      showErrorToast("Thao tác thất bại, vui lòng đăng nhập để tương tác.");
    }

    let path = apiUrl + "/post/" + data._id + "/like";
    if (status) path = apiUrl + "/post/" + data._id + "/unlike";

    const response = await axios.patch(
      path,
      {},
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    setState(response.data.post.likeCount);
    setStatus(!status);
  };

  const handleDelete = async () => {
    if (!token) return;
    const res = await axios.delete(apiUrl + "/post/" + data._id, {
      headers: { Authorization: "Bearer " + token },
    });
    if (res.data.success) {
      showSuccessToast("Thao tác thành công, vui lòng kiểm tra thông tin.");
      onDelete(data._id);
    }
  };
  return (
    <div className="post__card">
      <div id="toast"></div>
      <div className="post__card__hidden" onClick={handleHidden}></div>
      <div className="post__card__head">
        <img src={img} alt="images" />
        <div className="post__card--overlay">
          <div className="card__overlay--left">
            <h5>Nhut luu</h5>
            <p>{moment(data.createdAt).fromNow()}</p>
          </div>
          <div className="card__overlay--right" onClick={handleClick}>
            <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
            <div className="post__card__dropdown">
              <ul>
                {(path &&
                  dropdown.map((item, index) => (
                    <li key={index}>
                      <i className={item.class}></i>&nbsp;{item.content}
                    </li>
                  ))) || (
                  <li>
                    <i className="bx bx-message-square-edit"></i>&nbsp; Chỉnh
                    sữa bài viết
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="post__card__body">
        {data.tags.map((item, index) => (
          <small key={index}>{item}</small>
        ))}
        <h2>{data.title}</h2>
        <small>{data.description}</small>
        <div className="post__card__link">
          <button onClick={handleLikePost}>
            <i className={(status && "bx bxs-like") || "bx bx-like"}></i>&nbsp;
            {state?.length || "0"}
            &nbsp;{(status && "Đã thích") || "Thích"}
          </button>
          {!path && (
            <button onClick={handleDelete}>
              <i className="bx bx-trash"></i>&nbsp;Xóa
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
