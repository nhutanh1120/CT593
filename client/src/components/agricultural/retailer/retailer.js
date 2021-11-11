import React from "react";

const Retailer = ({ data }) => {
  return (
    <div className="agricultural--retail">
      <div className="agricultural--header">
        <h3>NHÀ BÁN LẼ</h3>
        <p>(Nới trực tiếp đưa sản phẩm đến đến với khách hàng)</p>
      </div>

      {(data && (
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
            <p>THÔNG TIN SẢN PHẨM</p>
          </div>
          <div className="table--content">
            <table>
              <thead>
                <tr>
                  <th>Tên cửa hàng</th>
                  <th>Địa chỉ cửa hàng</th>
                  <th>Giá sản phẩm (VND)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data?.nameStore}</td>
                  <td>{data?.addressRetail}</td>
                  <td>{data?.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )) || <div className="agricultural--contain"></div>}
    </div>
  );
};

export default Retailer;
