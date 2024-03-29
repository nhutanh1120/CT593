import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img from "./../../../assets/img/bg.jpg";
import Update from "./../update";
import moment from "moment";
import { GTIN } from "./../../../constants";

const ProductItem = ({ agricultural, onDelete }) => {
  const onDeletes = async () => {
    // if (confirm("Bạn có chắc chắn muốn xóa sản phẩm ?")) {
    onDelete(agricultural._id);
    // }
  };

  // show form update
  const [viewUpdate, setViewUpdate] = useState(false);
  const hideUpdate = (value) => setViewUpdate(value);
  useEffect(() => {
    setViewUpdate(false);
  }, []);

  // Handle Event
  const ref = useRef(null);
  const handleClick = (e) => {
    const content__current = e.target;
    if (!content__current) return;
    if (
      content__current.className === "product__footer--action" ||
      content__current.className === "product__footer--notification"
    )
      content__current?.lastChild?.classList?.toggle("active--dropdown");
    else content__current?.nextSibling?.classList?.toggle("active--dropdown");
    ref.current.style.display = "block";
  };
  const closeElement = () => {
    const closeElements = document.querySelectorAll(".active--dropdown");
    if (!closeElements) return;
    closeElements.forEach((element) => {
      element?.classList?.remove("active--dropdown");
    });
    ref.current.style.display = "none";
  };
  const Dropdown = () => (
    <div className="product__dropdown__content">
      <Link
        to={"/user/dashboard/detail/" + agricultural._id}
        className="product--button"
      >
        Xem chi tiết
      </Link>
      <Link
        to={"/user/dashboard/detail/" + agricultural._id}
        className="product--button"
      >
        Thêm hoạt động
      </Link>
      <button
        className="product--button"
        onClick={() => {
          setViewUpdate(!viewUpdate);
          closeElement();
        }}
      >
        Cập nhật thông tin
      </button>
      <Link
        to={"/user/dashboard/detail/" + agricultural._id}
        className="product--button"
      >
        Hoàn thành
      </Link>
      <button className="product--button" onClick={onDeletes}>
        Xóa sản phẩm
      </button>
    </div>
  );
  const DropdownSaved = () => (
    <div className="product__dropdown__content">
      <Link
        to={"/agricultural/" + GTIN + agricultural._id}
        className="product--button"
      >
        Xem chi tiết
      </Link>
    </div>
  );
  return (
    <>
      {viewUpdate && <Update hideUpdate={hideUpdate} data={agricultural} />}
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
                  <Link to="/user/dashboard" className="product--a">
                    <i className="bx bx-check-circle bx-sm"></i>
                    <span>
                      <p>
                        Bạn đã tạo thành công sản phẩm&nbsp;
                        <b>{agricultural.breed.nameBreed}</b>
                      </p>
                      <small>{moment(agricultural.createdAt).fromNow()}</small>
                    </span>
                  </Link>
                  {agricultural.createdAt !== agricultural.updatedAt && (
                    <Link to="/user/dashboard" className="product--a">
                      <i className="bx bx-check-circle bx-sm"></i>
                      <span>
                        <p>
                          Bạn đã cập nhật sản phẩm thành công&nbsp;
                          <b>{agricultural.breed.nameBreed}</b>
                        </p>
                        <small>
                          {moment(agricultural.updatedAt).fromNow()}
                        </small>
                      </span>
                    </Link>
                  )}
                  {agricultural.status === 1 && (
                    <Link to={"/user/dashboard"} className="product--a">
                      <i className="bx bx-info-circle bx-sm"></i>
                      <span>
                        <p>
                          Sản phẩm của bạn đã được gửi cho kiểm duyệt viên&nbsp;
                          <b>{agricultural.breed.nameBreed}</b>
                        </p>
                        <small>
                          {moment(agricultural.updatedAt).fromNow()}
                        </small>
                      </span>
                    </Link>
                  )}
                  {agricultural.status === 2 && (
                    <>
                      <Link to={"/user/dashboard"} className="product--a">
                        <i className="bx bx-check-circle bx-sm"></i>
                        <span>
                          <p>
                            Sản phẩm của bạn đã được quản trị viên duyệt &nbsp;
                            <b>{agricultural.breed.nameBreed}</b>
                          </p>
                          <small>
                            {moment(agricultural.updatedAt).fromNow()}
                          </small>
                        </span>
                      </Link>
                      <Link
                        to={"/qr/" + agricultural._id}
                        target="_blank"
                        className="product--a"
                      >
                        <i className="bx bx-qr bx-sm"></i>
                        <span>
                          <p>
                            Sản phẩm đã được duyệt thành công, xem mà qr của sản
                            phẩm&nbsp;
                            <b>{agricultural.breed.nameBreed}</b>
                          </p>
                          <small>
                            {moment(agricultural.updatedAt).fromNow()}
                          </small>
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="product__footer--action" onClick={handleClick}>
                <i className="bx bx-dots-horizontal-rounded bx-sm"></i>
                {onDelete ? <Dropdown /> : <DropdownSaved />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
