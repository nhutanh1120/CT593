import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../components/layouts/header/header";
import AvatarItem from "../components/profile/avatar";
import ContactItem from "../components/profile/contact";
import InfoItem from "../components/profile/info";
import RoleItem from "../components/profile/Role";
import "./../assets/css/profile.css";

const initialState = [
  {
    title: "khách hàng",
    value: "0",
    active: true,
  },
  {
    title: "sản xuất",
    value: "2",
    active: false,
  },
  {
    title: "phân phối",
    value: "3",
    active: false,
  },
  {
    title: "chế biến",
    value: "4",
    active: false,
  },
  {
    title: "bán lẻ",
    value: "5",
    active: false,
  },
  {
    title: "Quản trị",
    value: "0",
    active: false,
  },
];

const Info = () => {
  const auth = useSelector((state) => state.auth);
  const { isLogged, isUpdate } = auth;
  const history = useHistory();

  useEffect(() => {
    if (!isLogged || isUpdate) {
      history.push("/");
    }
  }, [isLogged, isUpdate, history]);

  /**
   * Change tabs
   */
  useEffect(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");

    const tabActive = $(".tab-item.active");
    const line = $(".tabs .line");

    const back = $(".button-back");
    const next = $(".button-next");

    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";

    tabs.forEach((tab, index) => {
      const pane = panes[index];

      tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
      };
    });
    back.onclick = function () {
      const tabBack = $(".tab-item.active").previousElementSibling;
      const paneBack = $(".tab-pane.active").previousElementSibling;

      if (!tabBack || !paneBack) {
        this.classList.add("disabled");
        return;
      }

      $(".disabled")?.classList?.remove("disabled");
      $(".tab-item.active").classList.remove("active");
      $(".tab-pane.active").classList.remove("active");

      line.style.left = tabBack.offsetLeft + "px";
      line.style.width = tabBack.offsetWidth + "px";

      tabBack.classList.add("active");
      paneBack.classList.add("active");
    };
    next.onclick = function () {
      let tabNext = $(".tab-item.active").nextElementSibling;
      let paneNext = $(".tab-pane.active").nextElementSibling;

      if (!tabNext || !paneNext) {
        this.classList.add("disabled");
        return;
      }

      $(".disabled")?.classList?.remove("disabled");
      $(".tab-item.active").classList.remove("active");
      $(".tab-pane.active").classList.remove("active");

      line.style.left = tabNext.offsetLeft + "px";
      line.style.width = tabNext.offsetWidth + "px";

      tabNext.classList.add("active");
      paneNext.classList.add("active");
    };
  }, []);

  /**
   * Get role from component role
   * remove border role in role items
   */
  const [dataRole, setDataRole] = useState(initialState);
  const [role, setRole] = useState(0);
  const indexOld = useRef(0);
  const roleValue = (index) => {
    const newArray = dataRole;
    newArray[indexOld.current].active = false;
    newArray[index].active = true;

    setDataRole(newArray);
    setRole(newArray[index].value);
    indexOld.current = index;
  };

  /**
   * Get information personal
   */
  const [info, setInfo] = useState({});
  /**
   * Get contact
   */
  const [contact, setContact] = useState({});

  return (
    <div className="App">
      <Header />
      <div className="tabs__info">
        <div className="tabs">
          <div className="tab-item active">
            <i className="tab-icon fas fa-code"></i>
            Vai trò
          </div>
          <div className="tab-item">
            <i className="tab-icon fas fa-cog"></i>
            Thông tin cá nhân
          </div>
          <div className="tab-item">
            <i className="tab-icon fas fa-plus-circle"></i>
            Địa chỉ liên hệ
          </div>
          <div className="tab-item">
            <i className="tab-icon fas fa-pen-nib"></i>
            Ảnh đại diện
          </div>
          <div className="line"></div>
        </div>

        <div className="tab-content">
          <div className="tab-pane active">
            <p className="tab__pane__title">
              Vui lòng, chọn vai trò của bạn trong chuỗi cung ứng của chúng tôi
            </p>
            <div className="grid wide">
              <div className="row">
                {dataRole.map((item, index) => (
                  <RoleItem
                    key={index}
                    data={item}
                    roleValue={roleValue}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="tab-pane">
            <p className="tab__pane__title">
              Vui lòng, cập nhật thông tin cá nhân.
            </p>
            <InfoItem info={setInfo} />
          </div>
          <div className="tab-pane">
            <p className="tab__pane__title">
              Vui lòng, cho chúng tôi biết địa chỉ liên hệ với bạn.
            </p>
            <ContactItem contact={setContact} />
          </div>
          <div className="tab-pane">
            <p className="tab__pane__title">
              Vui lòng, cập nhật ảnh đại diện để mọi người đều biết đến bạn.
            </p>
            <AvatarItem role={role} info={info} contact={contact} />
          </div>
        </div>
        <div className="tab-button">
          <button className="button-back">Quay lại</button>
          <button className="button-next">Kế tiếp</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
