import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const ScrollTop = () => {
  const scroll = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const ref = useRef(null);

  const changeStyle = () => {
    if (window.scrollY > 100) {
      ref.current.classList.add("scroll__Active");
    } else {
      ref.current.classList.remove("scroll__Active");
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", changeStyle);
    return () => {
      document.removeEventListener("scroll", changeStyle);
    };
  }, []);
  return (
    <div className="scroll" onClick={scroll} ref={ref}>
      <i className="bx bx-up-arrow-alt"></i>
    </div>
  );
};

export default ScrollTop;
