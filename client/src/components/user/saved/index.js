import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Empty from "../../utils/empty/data";
import ProductItem from "./../productItem/productItem";

const Saved = () => {
  const agricultural = useSelector((state) => state.agricultural.list);

  const [state, setState] = useState([]);
  useEffect(() => {
    const newData = agricultural.filter((item) => item.status > 1);
    setState(newData);
  }, [agricultural]);
  return (
    <div className="grid body">
      <div className="dashboard__body__header">
        <h2>Lưu trữ</h2>
      </div>

      <div className="row dashboard__body--min--height">
        {state.length !== 0 ? (
          state.map((agricultural, index) => (
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
