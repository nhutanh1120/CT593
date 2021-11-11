import React from "react";

const Distributor = ({ data }) => {
  return (
    <div className="agricultural--share">
      <div className="agricultural--header">
        <h3>NHÀ PHÂN PHỐI</h3>
        <p>(Quá trình chuyển nông sản đến với khách hàng)</p>
      </div>

      <div className="agricultural--contain">
        {data && (
          <>
            <div className="agricultural--title">
              <span className="agricultural--title--icon">1</span>
              <p>thông tin nhà phân phối</p>
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
              <p>Thông tin về phân phối</p>
            </div>
            <div className="table--content">
              <table>
                <thead>
                  <tr>
                    <th>Địa chỉ bắt đầu</th>
                    <th>Địa chỉ kết thúc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data?.start}</td>
                    <td>{data?.end}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Distributor;
