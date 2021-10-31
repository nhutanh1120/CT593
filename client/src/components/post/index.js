import moment from "moment";
import React from "react";
import img from "./../../assets/img/bg.jpg";
import "./style.css";

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
const PostItem = ({ data, path }) => {
  // useEffect(() => {
  //   moment.locale("fr");
  //   console.log(moment().localeData());
  //   moment().lang("vi").format();
  //   console.log(moment.locale());
  // }, []);

  console.log(data);
  const handleClick = (e) => {
    e.target.nextElementSibling.classList.toggle("active");
    document.querySelector(".post__card__hidden").style.display = "block";
  };
  const handleHidden = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.style.display = "none";
  };
  const handleLikeCount = () => {
    alert("like");
  };
  const handleDelete = () => {
    alert("delete");
  };
  return (
    <div className="post__card">
      <div className="post__card__hidden" onClick={handleHidden}></div>
      <div className="post__card__head">
        <img src={img} alt="images" />
        <div className="post__card--overlay">
          <div className="card__overlay--left">
            <h5>Nhut luu</h5>
            <p>{moment(data.createAt).fromNow()}</p>
          </div>
          <div className="card__overlay--right" onClick={handleClick}>
            <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
            <div className="post__card__dropdown">
              <ul>
                {path &&
                  dropdown.map((item, index) => (
                    <li key={index}>
                      <i className={item.class}></i>&nbsp;{item.content}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="post__card__body">
        <small>abcds</small>
        <h2>{data.title}</h2>
        <small>{data.description}</small>
        <div className="post__card__link">
          <button onClick={handleLikeCount}>
            <i className="bx bx-like"></i>&nbsp;Thích&nbsp;{data.likeCount}
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
