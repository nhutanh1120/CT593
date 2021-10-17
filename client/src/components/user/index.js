import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAgriculturalRequest,
  fetchAgricultural,
} from "../../redux/actions/agriculturalActions";
import "./../dashboard/body/body.css";
import Create from "./create";
import "./index.css";
import ProductItem from "./productItem/productItem";

const Body = () => {
  const agricultural = useSelector((state) => state.agricultural);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      fetchAgricultural(token, dispatch);
    }
  }, [token, dispatch]);

  const onDelete = (id) => {
    deleteAgriculturalRequest(token, dispatch, id);
  };

  const [viewCreate, setViewCreate] = useState(false);
  const hideCreate = (value) => setViewCreate(value);
  return (
    <>
      <Create
        styles={viewCreate}
        hideCreate={hideCreate}
        token={token}
        dispatch={dispatch}
      />
      <div className="grid body">
        <div className="dashboard__body__header">
          <h2>Sản phẩm</h2>
          <button className="btn" onClick={() => setViewCreate(!viewCreate)}>
            <i className="bx bx-plus bx-sm bx-burst-hover"></i>
            <span className="tooltip__create">thêm mới</span>
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
