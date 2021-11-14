import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import "./style.css";

const Dialog = ({ title, description, link }) => (
  <div className="agricultural__dialog">
    <h1>Thêm hoạt động</h1>
    <p>{description}</p>
    <div>
      <button
        onClick={() => {
          document.querySelector(".agricultural__show--body").style.display =
            "none";
          document.querySelector(".agricultural__hidden").style.display =
            "none";
        }}
      >
        Hủy bỏ
      </button>
      <Link to={link || "/"}>{title}</Link>
    </div>
  </div>
);

const initialState = {
  title: "Đăng nhập",
  description: "Bạn chưa đăng nhập, vui lòng đăng nhập để thêm hoạt động mới.",
  link: "/sign",
};
function ShowSupplier() {
  const [state, setState] = useState(initialState);
  const role = useSelector((state) => state.auth.user.role);
  const isLogin = localStorage.getItem("firstLogin");
  const match = useRouteMatch();
  useEffect(() => {
    if (isLogin) {
      switch (role) {
        case 2:
          setState({
            title: "Thêm nông sản",
            description:
              "Bạn không thể sữa sản phẩm này, bạn vẫn có thể thêm sản phẩm mới của mình bất cứ lúc nào.",
            link: "/",
          });
          break;
        case 3:
          setState({
            title: "Phân phối sản phẩm",
            description:
              "Sản phẩm mới sẽ được tạo ra, vui lòng kiểm tra thông tin trước khi xác nhận.",
            link: match.url + "/distributor",
          });
          break;
        case 4:
          setState({
            title: "Chế biến sản phẩm",
            description:
              "Sản phẩm mới sẽ được tạo ra, vui lòng kiểm tra thông tin trước khi xác nhận.",
            link: match.url + "/processing",
          });
          break;
        case 5:
          setState({
            title: "Bán lẻ sản phẩm",
            description:
              "Sản phẩm mới sẽ được tạo ra, vui lòng kiểm tra thông tin trước khi xác nhận.",
            link: match.url + "/retailer",
          });
          break;
        default:
          setState({
            title: "Về trang chủ",
            description:
              "Bạn không thể sữa sản phẩm này, bạn vẫn có thể về trang chủ để xem các tin tức mới nhất của chúng tôi.",
            link: "/",
          });
          break;
      }
    }
  }, [isLogin, role, match.url]);
  return (
    <>
      <div
        className="agricultural__show"
        onClick={() => {
          document.querySelector(".agricultural__show--body").style.display =
            "block";
          document.querySelector(".agricultural__hidden").style.display =
            "block";
        }}
      >
        <div className="agricultural__show--head">
          <i className="bx bx-plus bx-sm bx-burst-hover"></i>
          <span>Thêm hoạt động</span>
        </div>
      </div>
      <div className="agricultural__show--body">
        <Dialog
          title={state.title}
          description={state.description}
          link={state.link}
        />
      </div>
      <div className="agricultural__hidden"></div>
    </>
  );
}

export default ShowSupplier;
