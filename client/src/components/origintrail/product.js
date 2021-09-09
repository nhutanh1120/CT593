import React from "react";
import "./product.css";

const Product = () => {
  return (
    <>
      <div className="grid wide price">
        <h2 className="heading-h2">TRUY SUẤT NGUỒN GỐC SẢN PHẨM</h2>
        <p className="text-p">
          Thông tin được công bố rõ ràng, công khai và nhất quán với hệ thống
          phần mềm.
          <br />
          Tuyệt đối không có giá ảo, chi phí phát sinh.
        </p>
        <div className="price_box">
          <div className="price_order">
            <div className="price_order-header">
              <h3>CHUỖI SẢN XUẤT</h3>
              <p>
                (Thông tin về nhà cung cấp, giống, hoạt động diễn ra, thời gian
                thu hoạch)
              </p>
            </div>

            <div className="price_order-contain">
              <div className="price_order-calculate">
                <p>
                  <b>Thông tin về sản phẩm</b>
                </p>
              </div>

              <div className="price_order-pay">
                <span className="price_order-pay--icon">1</span>
                <p>THÔNG TIN NHÀ CUNG CẤP</p>
              </div>
              <ul>
                <li>Họ tên: Lưu Trần Anh Nhựt</li>
                <li>Địa chỉ sản xuất: Lưu Trần Anh Nhựt</li>
              </ul>
              <div className="price_order-pay">
                <span className="price_order-pay--icon">2</span>
                <p>THÔNG TIN VỀ GIỐNG</p>
              </div>

              <div className="price_order-pay">
                <span className="price_order-pay--icon">3</span>
                <p>
                  HOẠT ĐỘNG DIỂN RA: Áp dụng từ ngày sản xuất đến khi thu hoạch.
                </p>
              </div>

              <table>
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>Thời gian (dd/mm/yyyy)</th>
                    <th>Tên sản phẩm sử dụng</th>
                    <th>Nhà cung cấp</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>10/09/2021</td>
                    <td>Thuốc .....</td>
                    <td>.........................</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>10/09/2021</td>
                    <td>Thuốc .....</td>
                    <td>.........................</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>10/09/2021</td>
                    <td>Thuốc .....</td>
                    <td>.........................</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Liên hệ</td>
                    <td>1%</td>
                    <td>50%</td>
                  </tr>
                </tbody>
              </table>

              <div className="price_order-pay margin__top30">
                <span className="price_order-pay--icon">4</span>
                <p>THÔNG TIN THU HOẠCH: Áp dụng theo mức phí dưới đây</p>
              </div>

              <table>
                <tbody>
                  <tr>
                    <th>Tổng cân nặng mỗi tháng</th>
                    <th>Về HN(đ/kg)</th>
                    <th>Về SG(đ/kg)</th>
                  </tr>
                  <tr>
                    <td>Dưới 150kg</td>
                    <td>23.500</td>
                    <td>29.500</td>
                  </tr>
                  <tr>
                    <td>Từ 150kg đến 2000kg</td>
                    <td>22.500</td>
                    <td>28.500</td>
                  </tr>
                  <tr>
                    <td>Trên 2000kg</td>
                    <td>21.500</td>
                    <td>27.500</td>
                  </tr>
                </tbody>
              </table>

              <div className="price_order-note">
                <p>
                  (*) Chúng tôi chỉ tính phí dịch vụ cho hàng về đến kho tại Hà
                  Nội hoặc TP.HCM, khách hàng sẽ đến kho lấy hoặc sẽ tự thanh
                  toán thêm tiền vận chuyển từ kho về nhà.
                </p>
              </div>
            </div>
          </div>

          <div className="price_ship">
            <div className="price_order-header">
              <h3>BÁO GIÁ VẬN CHUYỂN HÀNG KÝ GỬI-SHIP HỘ </h3>
              <p>(Khách tự chuyển hàng về kho Quảng Châu)</p>
            </div>

            <div className="price_order-contain">
              <table>
                <tbody>
                  <tr>
                    <th>Tổng cân nặng mỗi tháng</th>
                    <th>Về HN(đ/kg)</th>
                    <th>Về SG(đ/kg)</th>
                  </tr>
                  <tr>
                    <td>Dưới 150kg</td>
                    <td>23.500</td>
                    <td>29.500</td>
                  </tr>
                  <tr>
                    <td>Từ 150kg đến 2000kg</td>
                    <td>22.500</td>
                    <td>28.500</td>
                  </tr>
                  <tr>
                    <td>Trên 2000kg</td>
                    <td>21.500</td>
                    <td>27.500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
