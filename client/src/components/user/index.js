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
import {
  showErrorToast,
  showSuccessToast,
} from "./../utils/notification/message";

const Body = () => {
  const agricultural = useSelector((state) => state.agricultural.list);
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

  const success = useSelector((state) => state.agricultural.success);
  useEffect(() => {
    if (success !== false && success !== null) {
      showSuccessToast("Thao tác thành công, vui lòng kiểm tra lại thông tin.");
    }
    if (success === false) {
      showErrorToast("Thao tác thất bại, vui lòng kiểm tra thông tin");
    }
  }, [success]);
  return (
    <>
      {viewCreate ? (
        <Create hideCreate={hideCreate} token={token} dispatch={dispatch} />
      ) : (
        ""
      )}
      <div id="toast"></div>
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
        </div>
      </div>
    </>
  );
};

export default Body;
