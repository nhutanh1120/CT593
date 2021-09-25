import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router";
import { apiClient, GTIN } from "./../constants/index";
import "./../assets/css/qr.css";

function QrCode() {
  const [state, setState] = useState(false);
  const { id } = useParams();

  // alert(id);
  // (01)03453120000011(8200)http://www.abc.net(10)ABCD1234(410)9501101020917
  const qr = apiClient + "/agricultural/" + GTIN + id;

  const printQR = (event) => {
    setState(!state);
    event.target.style.display = "none";
    document.getElementById("demo").style.display = "none";
    window.print();
  };

  useEffect(() => {
    document.getElementById("printQR").style.display = "inline";
    document.getElementById("demo").style.display = "inline";
  }, [state]);
  return (
    <div className="App">
      <div className="qr">
        <span>
          <QRCode value={qr} />
        </span>
        <button onClick={printQR} id="printQR">
          <i class="bx bxs-download"></i> Download QR
        </button>
        <p id="demo">GS1 QR Code: {qr}</p>
      </div>
    </div>
  );
}

export default QrCode;
