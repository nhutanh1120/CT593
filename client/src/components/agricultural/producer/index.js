import moment from "moment";
import React from "react";
import TableAction from "./action/table";

const Producer = ({ agricultural, actionData }) => {
  return (
    <>
      <h2 className="heading--h2">TRUY SUẤT NGUỒN GỐC SẢN PHẨM</h2>
      <p className="text--p">
        Thông tin được công bố rõ ràng, công khai và nhất quán với hệ thống phần
        mềm.
        <br />
        Tuyệt đối không có dử liệu ảo, chi phí phát sinh.
      </p>
      <div className="agricultural--box">
        <div className="agricultural--history">
          <div className="agricultural--header">
            <h3>CHUỖI SẢN XUẤT</h3>
            <p>
              (Thông tin về nhà cung cấp, giống, hoạt động diễn ra, thời gian
              thu hoạch)
            </p>
          </div>

          <div className="agricultural--contain">
            <div className="price_order-calculate">
              <p>
                <b>Thông tin về nông sản</b>
              </p>
            </div>

            <div className="agricultural--title">
              <span className="agricultural--title--icon">1</span>
              <p>THÔNG TIN NHÀ CUNG CẤP</p>
            </div>
            <div className="agricultural__supplier__header">
              <div>
                <ul>
                  <li>Họ tên: {agricultural.producer.name}</li>
                  <li>Địa chỉ liên hệ: {agricultural.producer.address}</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Email: {agricultural.producer.email}</li>
                  <li>Số điện thoại: {agricultural.producer.phone}</li>
                </ul>
              </div>
            </div>
            <div className="agricultural--title">
              <span className="agricultural--title--icon">2</span>
              <p>THÔNG TIN VỀ GIỐNG</p>
            </div>
            <ul>
              <li>Địa chỉ sản xuất: {agricultural.breed.addressBreed}</li>
            </ul>
            <div className="table--content">
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
                      {agricultural?.breed?.typeAgricultural === 1
                        ? "Vật nuôi"
                        : "Cây trồng"}
                    </td>
                    <td>{agricultural.breed.nameBreed}</td>
                    <td>{agricultural.breed.supplierBreed}</td>
                    <td>
                      {moment(agricultural.breed.timeBreed).format(
                        "DD/MM/YYYY"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="agricultural--title">
              <span className="agricultural--title--icon">3</span>
              <p>
                HOẠT ĐỘNG DIỂN RA: Áp dụng từ ngày sản xuất đến khi thu hoạch.
              </p>
            </div>

            {actionData.map((data, index) => (
              <TableAction
                action={data}
                type={agricultural.breed.typeAgricultural}
                key={index}
              />
            ))}

            <div className="agricultural--title">
              <span className="agricultural--title--icon">4</span>
              <p>THÔNG TIN THU HOẠCH</p>
            </div>
            <div className="table--content">
              <table>
                <thead>
                  <tr>
                    <th>Ngày thu hoạch</th>
                    <th>Hình ảnh sản phảm</th>
                    <th>Hạn sử dụng</th>
                    <th>Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{agricultural?.harvest?.times}</td>
                    <td>{agricultural?.harvest?.images}</td>
                    <td>{agricultural?.harvest?.expiry}</td>
                    <td>{agricultural?.harvest?.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="agricultural--note">
              <p>
                (*) Chúng tôi chỉ cập nhật lịch sử nông sản từ khi sản xuất đến
                khi thu hoạch, khách hàng muốn xem chi tiết về chế biến, vận
                chuyển từ kho đến tay khách hàng, vui lòng xem các mục tiếp
                theo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Producer;
