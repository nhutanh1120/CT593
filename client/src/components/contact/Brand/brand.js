import React from "react";
import img from "./../../../assets/img/contact1.png";
import "./style.css";

const Brand = () => {
  return (
    <>
      <section className="hero contact">
        <div className="brand-text">
          <img src={img} alt="img" />
          <h5>Hãy ăn uốn có mục đích</h5>
          <p>Trước khi ăn, hãy nghĩ về nó:</p>
          <p>
            Bạn đã trải qua những gì trong quá trình di chuyển những thực phẩm
            này từ nơi sản xuất đến bàn ăn?
          </p>
          <p>Thức ăn đến từ đâu? Làm thế nào để đến nhà của tôi?</p>
          <p>Thức ăn thừa có gây hại cho sức khỏe hay không?</p>
        </div>
      </section>
    </>
  );
};

export default Brand;
