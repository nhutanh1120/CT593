import React from "react";
import Distributor from "./distributor/distributor";
import Processing from "./processing";
import Producer from "./producer";
import Retailer from "./retailer/retailer";
import "./style.css";

const AgriculturalItem = ({ agricultural, actionData }) => {
  return (
    <div className="agricultural">
      <Producer agricultural={agricultural} actionData={actionData} />
      <div className="agricultural--box">
        <Distributor />
        <Processing />
        <Retailer />
      </div>
    </div>
  );
};

export default AgriculturalItem;
