import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../constants";
import "./product.css";

const initialState = {
  user_id: "",
  typeAgricultural: "",
  address: "",
  breed: "",
  actions: "",
  agricultural: "",
};
const Product = () => {
  const [agricultural, setAgricultural] = useState(initialState);
  const { id } = useParams();
  // console.log(id);
  const getData = async () => {
    try {
      const res = await axios.get(apiUrl + "/agricultural/read/" + id, null);
      const {
        user_id,
        typeAgricultural,
        address,
        breed,
        actions,
        agricultural: harvest,
      } = res.data.data;
      if (res.data.success) {
        setAgricultural({
          ...agricultural,
          user_id,
          typeAgricultural,
          address,
          breed,
          actions,
          agricultural: harvest,
        });
      }
    } catch (error) {}
  };

  // const getDatalist = (array) => {
  //   array.map((listAction, index) => (
  //     <tr key={index}>
  //       <td>{index + 1}</td>
  //       <td>{listAction.nameAction}</td>
  //       <td>{listAction.supplierAction}</td>
  //     </tr>
  //   ));
  // };

  // const getDataActions = Object.keys(agricultural.actions).map(
  //   (action, index) => (
  //     <table key={index}>
  //       <thead>
  //         <tr>
  //           <th>#</th>
  //           <th>Tên sản phẩm sử dụng</th>
  //           <th>Nhà cung cấp</th>
  //         </tr>
  //       </thead>
  //       <tbody>{getDatalist(action.listAction)}</tbody>
  //     </table>
  //   )
  // );

  useEffect(() => {
    getData();
  }, []);

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
                <li>Họ tên: {agricultural.user_id}</li>
                <li>Địa chỉ sản xuất: {agricultural.address}</li>
              </ul>
              <div className="price_order-pay">
                <span className="price_order-pay--icon">2</span>
                <p>THÔNG TIN VỀ GIỐNG</p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Loại nông sản</th>
                    <th>Thời gian (dd/mm/yyyy)</th>
                    <th>Tên nông sản</th>
                    <th>Nhà cung cấp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {agricultural.typeAgricultural === 1
                        ? "Vật nuôi"
                        : "Cây trồng"}
                    </td>
                    <td>
                      {agricultural.breed.timeBreed
                        ? agricultural.breed.timeBreed
                        : null}
                    </td>
                    <td>
                      {agricultural.breed.nameBreed
                        ? agricultural.breed.nameBreed
                        : null}
                    </td>
                    <td>
                      {agricultural.breed.supplierBreed
                        ? agricultural.breed.supplierBreed
                        : null}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="price_order-pay">
                <span className="price_order-pay--icon">3</span>
                <p>
                  HOẠT ĐỘNG DIỂN RA: Áp dụng từ ngày sản xuất đến khi thu hoạch.
                </p>
              </div>
              {/* {getDataActions} */}
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
                <p>THÔNG TIN THU HOẠCH</p>
              </div>

              <table>
                <tbody>
                  <tr>
                    <th>Ngày thu hoạch</th>
                    <th>Hình ảnh sản phảm</th>
                    <th>Mô tả</th>
                  </tr>
                </tbody>
              </table>

              <div className="price_order-note">
                <p>
                  (*) Chúng tôi chỉ cập nhật lịch sử nông sản từ khi sản xuất
                  đến khi thu hoạch, khách hàng muốn xem chi tiết về chế biến,
                  vận chuyển từ kho đến tay khách hàng, vui lòng xem các mục
                  tiếp theo.
                </p>
              </div>
            </div>
          </div>

          <div className="price_ship">
            <div className="price_order-header">
              <h3>CHUỗi PHÂN PHỐI</h3>
              <p>(Quá trình chuyển nông sản đến với khách hàng)</p>
            </div>

            <div className="price_order-contain">
              {/* <table>
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
              </table> */}
            </div>
          </div>
          <div className="price_ship">
            <div className="price_order-header">
              <h3>NHÀ CUNG CẤP (CHẾ BIẾN)</h3>
              <p>
                (Chế biến nông sản thành các nguyên liệu thực phẩm hoặc sản phẩm
                thực phẩm)
              </p>
            </div>

            <div className="price_order-contain">
              {/* <table>
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
              </table> */}
            </div>
          </div>
          <div className="price_ship">
            <div className="price_order-header">
              <h3>NHÀ BÁN LẼ</h3>
              <p>(Nới trực tiếp đưa sản phẩm đến đến với khách hàng)</p>
            </div>

            <div className="price_order-contain">
              {/* <table>
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
              </table> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
