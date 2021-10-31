import React from "react";
import { useSelector } from "react-redux";
import Empty from "../../utils/empty/data";
import ProductItem from "./../productItem/productItem";

const Saved = () => {
  const agricultural = useSelector((state) => state.agricultural.list);

  return (
    <div className="grid body">
      <div className="dashboard__body__header">
        <h2>Lưu trữ</h2>
      </div>

      <div className="row dashboard__body--min--height">
        {agricultural.length ? (
          agricultural.map((agricultural, index) => (
            <ProductItem key={index} agricultural={agricultural} />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default Saved;
