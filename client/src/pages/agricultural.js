import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AgriculturalItem from "../components/agricultural";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";
import "./../assets/css/agricultural.css";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";
import { apiUrl } from "./../constants";

const showErrorAgricultural = (message) => (
  <div className="showError-agricultural">
    <i className="bx bx-heart"></i>
    <p>{message}</p>
  </div>
);

const initialState = {
  producer: "",
  breed: "",
  harvest: "",
};

const Agricultural = () => {
  const [agricultural, setAgricultural] = useState(initialState);
  const [actionData, setActionData] = useState([]);
  const [showError, setShowError] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(apiUrl + "/agricultural/read/" + id, null);
        if (res.data.success === true) {
          setAgricultural(res.data.agricultural);
          setActionData(res.data.agricultural.actions);
        }
      } catch (error) {
        setShowError(error?.response?.data?.success);
      }
    })(id);
  }, [id]);

  return (
    <div className="App">
      <Header />
      {(!showError && showErrorAgricultural("Không tim thấy sản phẩm")) || (
        <AgriculturalItem agricultural={agricultural} actionData={actionData} />
      )}
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Agricultural;
