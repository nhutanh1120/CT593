import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router";
import { apiClient } from "./../constants/index";
import "./../assets/css/qr.css";

function QrCode() {
  const [state, setState] = useState(false);
  const { id } = useParams();

  const qr = apiClient + "/agricultural/" + id;

  const printQR = (event) => {
    setState(!state);
    event.target.style.display = "none";
    window.print();
  };

  useEffect(() => {
    document.getElementById("printQR").style.display = "inline";
  }, [state]);
  return (
    <div className="App">
      <div className="qr">
        <h2 onClick={printQR} id="printQR">
          <i className="bx bx-printer"></i> In
        </h2>
        <span>
          <QRCode value={qr} />
        </span>
      </div>
    </div>
  );
}

export default QrCode;
