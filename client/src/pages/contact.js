import React from "react";
import Header from "./../components/layouts/header/header";
import Footer from "./../components/layouts/footer/footer";
import Connection from "./../components/contact/connection";
import Brand from "./../components/contact/Brand/brand";
import Approve from "./../components/contact/approve";
import img from "./../assets/img/contact1.png";

function Contact() {
  const data = [
    {
      title: "Chứng nhận chất hữu cơ",
      imgUrl: img,
      text: "Chứng nhận hữu cơ của các tổ chức uy tính.",
    },
    {
      title: "Phát hiện dư lượng thuốc trừ sâu",
      imgUrl: img,
      text: "Rau phi hữu cơ được kiểm nghiệm bởi phòng thí nghiệm chứng nhận CNAS.",
    },
    {
      title: "Sàng lọc bổ sung",
      imgUrl: img,
      text: "Thành phần của thực phẩm đóng gói sẵn rất đơn giản, cam kết không thêm hương liệu, phẩm màu, chất bảo quản.",
    },
    {
      title: "Sàng lọc bổ sung",
      imgUrl: img,
      text: "Thành phần của thực phẩm đóng gói sẵn rất đơn giản, cam kết không thêm hương liệu, phẩm màu, chất bảo quản.",
    },
  ];
  return (
    <div className="App">
      <Header classNav="header-home" />
      <Brand />
      <h5 className="approve-contact">
        Truy xuất nguồn gốc thực phẩm và yêu cầu các tiêu chuẩn lựa chọn
      </h5>
      <div className="approve">
        {data.map((data, index) => (
          <Approve
            title={data.title}
            imgUrl={data.imgUrl}
            text={data.text}
            key={index}
          />
        ))}
      </div>
      <Footer />
      <Connection />
    </div>
  );
}

export default Contact;
