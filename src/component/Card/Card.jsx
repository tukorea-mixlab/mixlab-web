import { React, useState } from "react";
import img from "../../Img/Icons/AccordionArrow.svg";
import "./Card.css";

export default function Card(props) {
  const [cardhover, setCardhover] = useState(false);

  return (
    <div
      className={`cardContainer ${props.type}`}
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
        onClick={props.onClick}
      ></div>
      <div className="cardinfoContainer">
        <div className="cardTextContainer">
          <div className={`cardTitle `}>
            <span>{props.title || "sad"}</span>
          </div>
          <div className="cardIntro">
            <span>{props.info || "ss"}</span>
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
