import { React, useState } from "react";
import img from "../../Img/Icons/AccordionArrow.svg";
import "./Card.css";

export default function Card(props) {
  const [cardhover, setCardhover] = useState(false);

  return (
    <div
      onClick={props.onClick}
      className={`cardContainer ${props.type} ${props.mainNews?'mainNews':''}`}
      // onMouseEnter={(e) => {
      //   setCardhover(true);
      //   console.log(cardhover);
      // }}
      // onMouseOut={(e) => {
      //   setCardhover(false);
      //   console.log(cardhover);
      // }}
    >
      <div
        className="cardImg"
        style={{
          backgroundImage: `url(${props.thumbnail})`,
        }}
      ></div>
      <div className="cardinfoContainer">
        <div className="cardTextContainer">
          <div className={`cardTitle `}>
            <span>{props.title || "sad"}</span>
          </div>
          <div className="cardIntro">
            <span>{props.info || ""}</span>
          </div>
        </div>
        <div className="cardMore">
          <span>자세히보기 </span>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
