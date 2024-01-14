import React from "react";
import "./carousel.css";
import $ from "jquery";
import img from "../../Img/Works/Works1.png";
import img2 from "../../Img/plus.svg"

export default function SixCarousel(props) {
  return (
    <div className="carousel">
      <div className="subImg">
        <div className="hover">
          <img src={img2} alt="" />
          <span>More view</span>
        </div>
        <img src={img} style={{ width: "175px", height: "175px" }} alt="" />
      </div>
      <div className="subImg">
      <div className="hover">
        <img src={img2} alt="" />
        <span>More view</span>
      </div>
        {" "}
        <img src={img} style={{ width: "175px", height: "175px" }} alt="" />
      </div>
      <div className="subImg">
      <div className="hover">
          <img src={img2} alt="" />
          <span>More view</span>
        </div>
        {" "}
        <img src={img} style={{ width: "175px", height: "175px" }} alt="" />
      </div>
      <div className="subImg">
      <div className="hover">
          <img src={img2} alt="" />
          <span>More view</span>
        </div>
        {" "}
        <img src={img} style={{ width: "175px", height: "175px" }} alt="" />
      </div>
      <div className="subImg">
      <div className="hover">
          <img src={img2} alt="" />
          <span>More view</span>
        </div>
        {" "}
        <img src={img} style={{ width: "175px", height: "175px" }} alt="" />
      </div>
      <div className="subImg">
      <div className="hover">
          <img src={img2} alt="" />
          <span>More view</span>
        </div>
        {" "}
        <img src={img} style={{ width: "175px", height: "175px" }} alt="" />
      </div>
    </div>
  );
}
