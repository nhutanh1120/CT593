import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import "./style.css";
import Action from "./action/index";
import Finish from "./finish/index";
import CreateAction from "./create";

const initialState = {
  producer: {
    user: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  },
  breed: {
    typeAgricultural: 0,
    nameBreed: "",
    supplierBreed: "",
    addressBreed: "",
    timeBreed: "",
  },
  actions: [],
  harvest: {},
};
const Detail = () => {
  const { id } = useParams();
  const history = useHistory();
  const data = useSelector((state) => state.agricultural.list);
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const agricultural = data.find((item) => item._id === id);
    setState(agricultural);
  }, [data, id]);

  console.log(state);
  const { breed, producer } = state;

  /**
   * View or hide success component
   */
  const [viewSuccess, setViewSuccess] = useState(false);
  const hideSuccess = (value) => setViewSuccess(value);

  /**
   *  View or hide create action
   */
  const [viewCreateAction, setViewCreateAction] = useState(false);
  const setHiddenCreate = (value) => setViewCreateAction(value);
  return (
    <>
      {viewSuccess && <Finish hideSuccess={hideSuccess} />}
      <div id="toast"></div>
      <div className="grid body">
        <div className="dashboard__body__header">
          <h2>
            <span onClick={() => history.goBack()}>Sản phẩm /</span>&nbsp;
            <span>Chi tiết /</span>&nbsp;
            <small>{breed.nameBreed}</small>
          </h2>
          <button className="btn" onClick={() => setViewSuccess(!viewSuccess)}>
            <i className="bx bx-check bx-sm bx-burst-hover"></i>
            <span className="tooltip__create">Hoàn thành</span>
          </button>
        </div>
        <div className="row dashboard__body--min--height">
          <div className="col l-12 c-12 m-12">
            <div className="dashboard__detail">
              <h2>Chuỗi sản xuất</h2>
              <div className="detail__producer">
                <div className="detail__producer--header">
                  <b>Thông tin về sản phẩm</b>
                </div>
                <div className="detail__producer--title">
                  <span>1</span>
                  <p>thông tin nhà cung cấp</p>
                </div>
                <div className="detail__producer--content">
                  <span>
                    <p>Họ tên: {producer.name}</p>
                    <p>Địa chỉ sản xuất: {producer.address}</p>
                  </span>
                  <span>
                    <p>Email: {producer.name}</p>
                    <p>Số điện thoại: {producer.phone}</p>
                  </span>
                </div>
                <div className="detail__producer--title">
                  <span>2</span>
                  <p>thông tin về giống</p>
                </div>
                <div className="detail__table">
                  <p>Địa chỉ sản xuất:&nbsp;{breed.addressBreed}</p>
                  <table>
                    <thead>
                      <tr>
                        <th>Loại nông sản</th>
                        <th>Tên nông sản</th>
                        <th>Nhà cung cấp</th>
                        <th>Thời gian</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {(breed.typeAgricultural === 0 && "Cây trồng") ||
                            "Vật nuôi"}
                        </td>
                        <td>{breed.nameBreed}</td>
                        <td>{breed.supplierBreed}</td>
                        <td>{moment(breed.timeBreed).format("DD-MM-YYYY")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="detail__producer--title">
                  <span>3</span>
                  <p>
                    Hoạt động sắp diễn ra: áp dụng từ ngày sản xuất đến khi thu
                    hoạch
                  </p>
                </div>
                {state.actions.map((item, index) => (
                  <Action key={index} data={item} />
                ))}
                {viewCreateAction && (
                  <CreateAction
                    setHiddenCreate={setHiddenCreate}
                    type={breed.typeAgricultural}
                  />
                )}
                <div
                  className="create__detail__table__hidden"
                  style={{ display: (viewCreateAction && "block") || "none" }}
                  onClick={() => setViewCreateAction(false)}
                ></div>
                <button onClick={() => setViewCreateAction(true)}>
                  Them hoat dong
                </button>
                <div className="detail__producer--title">
                  <span>4</span>
                  <p>thông tin thu hoạch</p>
                </div>
                {state.harvest && (
                  <div className="detail__table">
                    <table>
                      <thead>
                        <tr>
                          <th>Hình ảnh sản phảm</th>
                          <th>Ngày thu hoạch</th>
                          <th>Hạn sử dụng</th>
                          <th>Mô tả</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{state.harvest.images}</td>
                          <td>
                            {moment(state.harvest.times).format("DD-MM-YYYY")}
                          </td>
                          <td>{state.harvest.expiry}</td>
                          <td>{state.harvest.description}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
