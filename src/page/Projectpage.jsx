import { React, useState } from "react";
import "./projectpage.css";

import computer from "../Img/Icons/computer.png";
import facturing from "../Img/Icons/facturing.png";
import joystick from "../Img/Icons/joystick.png";
import combination from "../Img/Icons/combination.png";
import Section from "../component/Section/Section";
import IntroList from "../component/Card/IntroList";
import Title from "../component/Title";
import Card from "../component/Card/Card";

// import challenge from "../Img/Icons/challenge.png";

export default function Projectpage() {
  const data = {
    subText: "Research Project",
    h3: "MIX LAB 연구 프로젝트",
    information: [" 기능대회, 어워드 등 연구 프로젝트 작업물입니다.  "],
  };

  return (
    <div className="PageWrapper">
      <div className="projectContainer">
        <div className="project_text">
          <h2>Project</h2>
          <p>실패와 도전으로 디자인의 경계를 넓혀갑니다. </p>
        </div>
        <div className="gradient"></div>
        <div className="projectbanner"></div>
      </div>
      <div className="PageContainer">
        <Section
          subText={data.subText}
          h3={data.h3}
          information={data.information}
          align={"center"}
          type={"center"}
          className={"identity"}
        />
      </div>
    </div>
  );
}
