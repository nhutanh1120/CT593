import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./../dashboard/body/body.css";
import Create from "./create";
import "./index.css";
import ProductItem from "./productItem/productItem";
import axios from "axios";
import { apiUrl } from "../../constants";

const Body = () => {
  // const agricultural = useSelector((state) => state.agricultural);
  // console.log(typeof agricultural);
  const [agricultural, setstate] = useState(null);
  useEffect(() => {
    axios({
      method: "get",
      url: apiUrl + "/agricultural/all/read",
      data: null,
    })
      .then((res) => {
        setstate(res.data.agricultural);
        console.log(res.data);
      })
      .catch((error) => {});
  }, []);

  const onDelete = async (id) => {
    try {
      const response = await axios.delete(
        apiUrl + "/agricultural/delete/" + id
      );
    } catch (error) {
      console.error(error);
    }
  };

  const [viewCreate, setViewCreate] = useState(false);
  const hideCreate = (value) => setViewCreate(value);
  return (
    <>
      <Create styles={viewCreate} hideCreate={hideCreate} />
      <div className="grid body">
        <div className="dashboard__body__header">
          <h2>Sản phẩm</h2>
          <button className="btn" onClick={() => setViewCreate(!viewCreate)}>
            <i className="bx bx-plus-circle bx-sm bx-spin-hover"></i>&nbsp;Thêm
            mới
          </button>
        </div>

        <div className="row dashboard__body--min--height">
          {agricultural
            ? agricultural.map((agricultural, index) => (
                <ProductItem
                  key={index}
                  agricultural={agricultural}
                  onDelete={onDelete}
                />
              ))
            : ""}
          <div className="col l-3 c-3 m-3">a</div>
          <div className="col l-3 c-3 m-3">a</div>
          <div className="col l-3 c-3 m-3">a</div>
        </div>
      </div>
    </>
  );
};

export default Body;
