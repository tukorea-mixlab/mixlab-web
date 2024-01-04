import React from "react";
import img from "../../Img/Icons/AccordionArrow.svg";
import "./Card.css";

export default function Card(props) {
  return (
    <div className={`cardContainer ${props.type}`}>
      <div
        className="cardImg"
        style={{
          backgroundImage: `url(${props.thumbnail})`,
        }}
      ></div>
      <div className="cardinfoContainer">
        <div className="cardTextContainer">
          <div className="cardTitle">{props.title || "sad"}</div>
          <div className="cardIntro">{props.info || "ss"}</div>
        </div>
        <div className="cardMore">
          <span>자세히보기 </span>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
