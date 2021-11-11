import React from "react";
import moment from "moment";

const Processing = ({ data }) => {
  return (
    <div className="agricultural--processing">
      <div className="agricultural--header">
        <h3>NHÀ CUNG CẤP (CHẾ BIẾN)</h3>
        <p>
          (Chế biến nông sản thành các nguyên liệu thực phẩm hoặc sản phẩm thực
          phẩm)
        </p>
      </div>

      <div className="agricultural--contain">
        <div className="agricultural--title">
          <span className="agricultural--title--icon">1</span>
          <p>THÔNG TIN NHÀ CUNG CẤP</p>
        </div>
        <div className="agricultural__supplier__header">
          <div>
            <ul>
              <li>Họ tên: {data?.profile?.name}</li>
              <li>Địa chỉ liên hệ: {data?.profile?.address}</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Email: {data?.profile?.email}</li>
              <li>Số điện thoại: {data?.profile?.phone}</li>
            </ul>
          </div>
        </div>
        <div className="agricultural--title">
          <span className="agricultural--title--icon">2</span>
          <p>thông tin về sản phẩm được chế biến</p>
        </div>
        <div className="table--content">
          <table>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Ảnh đại diện</th>
                <th>Ngày sản xuất</th>
                <th>Hạn sử dụng (kể từ ngày sản xuất)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data?.nameProduct}</td>
                <td>
                  <img src={data?.images} alt="images" />
                </td>
                <td>{moment(data?.dateManufacture).format("DD-MM-YYYY")}</td>
                <td>{data?.expiry}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="agricultural--title">
          <span className="agricultural--title--icon">3</span>
          <p>thông tin về các phụ liệu được thêm vào</p>
        </div>
        <div className="table--content">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên phụ liệu</th>
                <th>Nhà cung cấp</th>
              </tr>
            </thead>
            <tbody>
              {data?.ingredients?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Processing;
