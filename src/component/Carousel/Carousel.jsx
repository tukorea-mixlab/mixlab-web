import React from "react";
import "./carousel.css";
import $ from "jquery";
import img1 from "../../Img/Works/Works1.png";
import img2 from "../../Img/Works/Works2.png";
import img3 from "../../Img/Works/Works3.png";

export default function Carousel(props) {
  return (
    <div className="carousel">
      <div className="subImg">
        <img src={img1} style={{ width: "175px", height: "175px" }} alt="" />
      </div>
      <div className="mainImg">
        <img src={img2} style={{ width: "277px", height: "277px" }} alt="" />
      </div>
      <div className="subImg">
        <img src={img3} style={{ width: "175px", height: "175px" }} alt="" />
      </div>
    </div>
  );
}
