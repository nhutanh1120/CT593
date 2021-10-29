import React, { useEffect } from "react";
import img1 from "./../../../assets/img/bg.jpg";
import "./style.css";

const SlideShow = () => {
  useEffect(() => {
    let counter = 1;
    const interval = setInterval(function () {
      const tagElements = document.getElementById("radio" + counter);
      if (!tagElements) return;
      tagElements.checked = true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="slider">
      <div className="slides">
        <input type="radio" name="radio" id="radio1" defaultChecked />
        <input type="radio" name="radio" id="radio2" />
        <input type="radio" name="radio" id="radio3" />
        <input type="radio" name="radio" id="radio4" />

        <div className="slide first">
          <img src={img1} alt="images" />
        </div>
        <div className="slide">
          <img src={img1} alt="images" />
        </div>
        <div className="slide">
          <img src={img1} alt="images" />
        </div>
        <div className="slide">
          <img src={img1} alt="images" />
        </div>

        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>

        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
