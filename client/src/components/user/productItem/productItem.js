import React, { useRef } from "react";
import { Link } from "react-router-dom";
import img from "./../../../assets/img/bg.jpg";

const ProductItem = ({ agricultural, onDelete }) => {
  // console.log(agricultural);

  const onDeletes = async () => {
    // if (confirm("Bạn có chắc chắn muốn xóa sản phẩm ?")) {
    onDelete(agricultural._id);
    // }
  };

  // Handle Event
  const ref = useRef(null);
  const handleClick = (e) => {
    const content__current = e.target.nextSibling;
    if (!content__current) return;
    content__current.classList.toggle("active--dropdown");
    ref.current.style.display = "block";
  };
  const closeElement = (e) => {
    const closeElements = document.querySelectorAll(".active--dropdown");
    if (!closeElements) return;
    closeElements.forEach((element) => {
      element.classList.remove("active--dropdown");
    });
    e.target.style.display = "none";
  };
  return (
    <div className="col l-3 m-6 c-12">
      <div className="div__hidden" onClick={closeElement} ref={ref}></div>
      <div className="product__card">
        <div className="product__header">
          <div className="product__header__img">
            <img src={img} alt="img" />
          </div>
          <div className="product__header__content">
            <h5>{agricultural.breed.nameBreed}</h5>
            <span>ID nông sản:&nbsp;{agricultural._id} </span>
            <span>
              Loại nông sản:&nbsp;
              {agricultural.breed.typeAgricultural === 0
                ? "Cây trồng"
                : "Vật nuôi"}
            </span>
          </div>
        </div>
        <div className="product__footer">
          <div className="product__footer--head">
            <i className="bx bx-bookmark-heart bx-sm"></i>&nbsp;Quản trị viên
          </div>
          <div className="product__footer--end">
            <div
              className="product__footer--notification"
              onClick={handleClick}
            >
              <i className="bx bx-bell bx-sm"></i>
              <div className="product__dropdown__content product--width">
                <Link to="/" className="product--a">
                  a
                </Link>
                <Link to="/" className="product--a">
                  a
                </Link>
                <Link to="/" className="product--a">
                  a
                </Link>
                <Link to="/" className="product--a">
                  a
                </Link>
              </div>
            </div>
            <div className="product__footer--action" onClick={handleClick}>
              <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
              <div className="product__dropdown__content">
                <Link
                  to={"/user/detail/" + agricultural._id}
                  className="product--button"
                >
                  Xem chi tiết
                </Link>
                <Link
                  to={"/user/detail/" + agricultural._id}
                  className="product--button"
                >
                  Thêm hoạt động
                </Link>
                <button className="product--button">Hoàn thành</button>
                <button className="product--button" onClick={onDeletes}>
                  Xóa sản phẩm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
