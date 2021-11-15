import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAgriculturalRequest,
  fetchAgricultural,
} from "../../redux/actions/agriculturalActions";
import Empty from "../utils/empty/data";
import "./../dashboard/style.css";
import {
  showErrorToast,
  showSuccessToast,
} from "./../utils/notification/message";
import Create from "./create";
import "./index.css";
import ProductItem from "./productItem/productItem";

const Body = () => {
  const agricultural = useSelector((state) => state.agricultural.list);

  const [state, setState] = useState([]);
  useEffect(() => {
    const newData = agricultural.filter((item) => item.status <= 1);
    setState(newData);
  }, [agricultural]);

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

  // show form create
  const [viewCreate, setViewCreate] = useState(false);
  const hideCreate = (value) => setViewCreate(value);

  // message
  const success = useSelector((state) => state.agricultural.success);
  const ref = useRef(success);
  useEffect(() => {
    if (ref.current !== success) {
      ref.current = success;
      if (success !== false && success !== null) {
        showSuccessToast(
          "Thao tác thành công, vui lòng kiểm tra lại thông tin."
        );
      }
      if (success === false) {
        showErrorToast("Thao tác thất bại, vui lòng kiểm tra thông tin");
      }
    }
  }, [success]);
  return (
    <>
      {viewCreate && (
        <Create hideCreate={hideCreate} token={token} dispatch={dispatch} />
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
          {state.length !== 0 ? (
            state.map((agricultural, index) => (
              <ProductItem
                key={index}
                agricultural={agricultural}
                onDelete={onDelete}
              />
            ))
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
