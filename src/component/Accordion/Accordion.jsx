import React from "react";
import "./Accordion.css";
import img from "../../Img/Icons/AccordionArrow.svg";

export default function Accordion(props) {
  return (
    <div className="Accordion active">
      <div className="Question layout">
        <p>
          {props.question}Q{1}. 전공은 상관없나요?
        </p>
        <img src={img} alt="" />
      </div>
      <div className="Answer layout">
        <ol type="A">
          <li>
            산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한
            디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학
            전공자도 환영합니다.
          </li>
        </ol>
      </div>
    </div>
  );
}
