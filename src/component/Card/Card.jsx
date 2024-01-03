import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className={`cardContainer ${props.type}`}>
      <div className="cardImg"></div>
      <div className="cardTextContainer">
        <div className="cardTitle"></div>
        <div className="cardIntro"></div>
      </div>
      <div className="cardMore"></div>
    </div>
  );
}
