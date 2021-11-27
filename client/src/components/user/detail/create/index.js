import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { apiUrl } from "./../../../../constants";
import { updateAgricultural } from "./../../../../redux/actions/agriculturalActions";
import { showSuccessToast } from "./../../../utils/notification/message";
import ActionListItem from "./list";
import ActionListCreate from "./list/create";
import "./style.css";

const typeAction = (typeBreed, typeAction) => {
  let string;
  if (typeBreed === 0) {
    string = typeAction === 0 ? "Phun thuốc" : "Bón phân";
  } else {
    string = typeAction === 0 ? "Thuốc phòng bệnh" : "Thức ăn";
  }
  return string;
};

const initialState = {
  typeAction: "",
  timeAction: "",
  listAction: [],
};
const CreateAction = ({ setHiddenCreate, type }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onCreate = (value) => {
    let newArray = [...state.listAction];
    newArray.push(value);
    setState({ ...state, listAction: newArray });
  };
  const setDelete = (index) => {
    let newArray = [...state.listAction];
    newArray.splice(index, 1);
    setState({ ...state, listAction: newArray });
  };

  const handleSubmit = async () => {
    let ok = true;
    if (state.typeAction === "") {
      document.getElementById("typeAction").innerText =
        "Vui lòng chọn loại hoạt động";
      ok = false;
    }
    if (state.timeAction === "") {
      document.getElementById("timeAction").innerText =
        "Vui lòng chọn loại hoạt động";
      ok = false;
    }
    if (state.listAction.length === 0) {
      document.getElementById("listAction").innerText =
        "Vui lòng nhập sản phẩm sử dụng";
      ok = false;
    }
    if (ok === true) {
      const res = await axios.patch(
        apiUrl + "/agricultural/producer/update/" + id,
        state,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (res?.data?.success) {
        showSuccessToast("Thao tác thành công, vui lòng kiểm tra thông tin");
        dispatch(updateAgricultural({ data: res.data.agricultural }));
        setHiddenCreate(false);
      }
    }
  };
  return (
    <div className="detail__table active" id="create__detail__table">
      <div className="detail__table__create" onClick={handleSubmit}>
        <i className="bx bx-plus bx-sm"></i>
        <span>Thêm hoạt động</span>
      </div>
      <div
        className="detail__table__create"
        onClick={() => setHiddenCreate(false)}
      >
        <i className="bx bx-trash bx-sm"></i>
        <span>Xóa hoạt động</span>
      </div>
      <div className="detail__table__header">
        <div className="detail__table__input">
          <label htmlFor="type">Hoạt động:</label>
          <select name="typeAction" id="type" onChange={handleChange}>
            <option value="">--Chọn hoạt động--</option>
            <option value="0">{typeAction(type, 0)}</option>
            <option value="1">{typeAction(type, 1)}</option>
          </select>
        </div>
        <span id="typeAction" className="form__message"></span>
        <div className="detail__table__input">
          <label htmlFor="time">Thời gian:</label>
          <input
            id="time"
            type="date"
            name="timeAction"
            onChange={handleChange}
          />
        </div>
        <span id="timeAction" className="form__message"></span>
      </div>
      <div className="detail__action--table">
        <div className="detail__action--thead">
          <div className="detail__action--tr">
            <span className="detail__action--th">#</span>
            <span className="detail__action--th">Tên sản phẩm sử dụng</span>
            <span className="detail__action--th">Nhà cung cấp</span>
            <span className="detail__action--th">Thời gian cách ly</span>
          </div>
        </div>
        <div className="detail__action--tbody">
          {state.listAction.map((item, index) => (
            <ActionListItem
              key={index}
              data={item}
              index={index}
              setDelete={setDelete}
            />
          ))}
          <ActionListCreate
            index={state.listAction.length + 1}
            setData={onCreate}
          />
        </div>
        <span id="listAction" className="form__message"></span>
      </div>
    </div>
  );
};

export default CreateAction;
