import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { apiUrl } from "./../../../constants";
import Distributor from "./../distributor/distributor";
import Processing from "./../processing";
import Producer from "./../producer";
import Retailer from "./../retailer/retailer";

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

const AgriculturalManager = () => {
  const [agricultural, setAgricultural] = useState(initialState);
  const [actionData, setActionData] = useState([]);
  const [distributor, setDistributor] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [retailer, setRetailer] = useState({});
  const [showError, setShowError] = useState(false);
  const { id } = useParams();
  const agriculturalAll = useSelector((state) => state.agriculturalAll);
  console.log(agriculturalAll);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(apiUrl + "/agricultural/read/" + id, null);
        if (res.data.success === true) {
          setAgricultural(res.data.agricultural);
          setActionData(res.data.agricultural.actions);
          setDistributor(res.data.agricultural.distributor);
          setProcessing(res.data.agricultural.processing);
          setRetailer(res.data.agricultural.retailer);
          setShowError(true);
        }
      } catch (error) {
        setShowError(error?.response?.data?.success);
      }
    })(id);
  }, [id]);
  return (
    <>
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
    </>
  );
};

export default AgriculturalManager;
