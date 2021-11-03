import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "./style.css";
import moment from "moment";

const initialState = {
  breed: {
    nameBreed: "",
    supplierBreed: "",
    timeBreed: "",
    typeAgricultural: 0,
  },
  producer: {
    address: "",
    name: "",
    user: "",
  },
};
const Detail = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.agricultural.list);
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const agricultural = data.find((item) => item._id === id);
    setState(agricultural);
  }, [data, id]);

  console.log(state);
  const { breed, producer } = state;
  return (
    <div className="grid body">
      <div className="dashboard__body__header">
        <h2>
          Sản phẩm&nbsp;/&nbsp;Chi tiết&nbsp;/&nbsp;
          <small>{breed.nameBreed}</small>
        </h2>
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
                <p>Họ tên: {producer.name}</p>
                <p>Địa chỉ sản xuất: {producer.address}</p>
              </div>
              <div className="detail__producer--title">
                <span>2</span>
                <p>thông tin về giống</p>
              </div>
              <div className="detail__table">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
