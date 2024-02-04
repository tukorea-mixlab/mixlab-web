import React from "react";
import "./carousel.css";
import $ from "jquery";
import img from "../../Img/Works/Works1.png";

export default function Carousel(props) {
  return (
    <div className="carousel">
      <div className="subImg">
        <img src={img} style={{ width: "175px", height: "175px" }} alt="" />
      </div>
      <div className="mainImg">
        <img src={img} style={{ width: "277px", height: "277px" }} alt="" />
      </div>
      <div className="subImg">
        <img src={img} style={{ width: "175px", height: "175px" }} alt="" />
      </div>
    </div>
  );
}
