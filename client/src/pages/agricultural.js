import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScrollTop from "../components/layouts/scrollTop/scrollTop";
import "./../assets/css/agricultural.css";
import Distributor from "./../components/agricultural/distributor/distributor";
import Processing from "./../components/agricultural/processing";
import Producer from "./../components/agricultural/producer";
import Retailer from "./../components/agricultural/retailer/retailer";
import Footer from "./../components/layouts/footer/footer";
import Header from "./../components/layouts/header/header";
import { apiUrl } from "./../constants";

const showErrorAgricultural = (message) => (
  <div className="showError-agricultural">
    <i className="bx bx-heart"></i>
    <p>{message}</p>
  </div>
);

const Empty = ({ title, text }) => (
  <div className="agricultural--share">
    <div className="agricultural--header">
      <h3>{title}</h3>
      <p>({text})</p>
    </div>
    <div className="agricultural--contain"></div>
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
  const [distributor, setDistributor] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [retailer, setRetailer] = useState({});
  const [showError, setShowError] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(apiUrl + "/agricultural/read/" + id, null);
        if (res.data.success === true) {
          console.log(res.data);
          setAgricultural(res.data.agricultural);
          setActionData(res.data.agricultural.actions);
          setDistributor(res.data.agricultural.distributor);
          setProcessing(res.data.agricultural.processing);
          setRetailer(res.data.agricultural.retailer);
        }
      } catch (error) {
        setShowError(error?.response?.data?.success);
      }
    })(id);
  }, [id]);

  return (
    <div className="App">
      <Header />
      {(showError && (
        <div className="agricultural">
          <Producer agricultural={agricultural} actionData={actionData} />
          <div className="agricultural--box">
            {(distributor.length !== 0 &&
              distributor.map((item, index) => (
                <Distributor key={index} data={item} />
              ))) || (
              <Empty
                title="NHÀ PHÂN PHỐI"
                text="Quá trình chuyển nông sản đến với khách hàng"
              />
            )}
            {(processing.length !== 0 &&
              processing.map((item, index) => (
                <Processing key={index} data={item} />
              ))) || (
              <Empty
                title="nhà cung cấp (chế biến)"
                text="Chế biến nông sản thành các nguyên liệu thực phẩm hoặc sản phẩm thực phẩm"
              />
            )}

            <Retailer data={retailer} />
          </div>
        </div>
      )) ||
        showErrorAgricultural("Không tim thấy sản phẩm")}
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Agricultural;
