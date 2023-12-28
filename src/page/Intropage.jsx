import { React, useState } from "react";
import "./intropage.css";
import Title from "../component/Title";
import computer from "../Img/Icons/computer.png";
import facturing from "../Img/Icons/facturing.png";
import joystick from "../Img/Icons/joystick.png";
import combination from "../Img/Icons/combination.png";
import IntroList from "../component/Card/IntroList";
import Button from "../component/Button/Button";
import Header from "../component/Header/Header";
import Section from "../component/Section/Section";
import Carousel from "../component/Carousel/Carousel";
import SixCarousel from "../component/Carousel/Sixcarousel";
import Footer from "../component/Footer/Footer";
import AccordionList from "../component/Accordion/AccordionList";


// import challenge from "../Img/Icons/challenge.png";

export default function Newspage() {
  const data = {
    subText: "Overview",
    h3: "What is MIX LAB",
    information: [
      "MIX LAB은 한국공학대학교 디자인공학부의 인터랙티브 미디어 연구실입니다.",
      <br />,
      "우리는 디자인(Design)과 구현(Making)을 통해 인터랙티브 미디어에 의한 사용자 경험을 연구합니다.",
      <br />,
      " “Make Intelligent eXperience” ",
      <br />,
      " 사람들이 영리한 경험을 할 수 있는 서비스를 만들고자 하는 목표는 MIX Lab.의 시작이 되었습니다.",
    ],
  };

  const Overview = [
    {
      Symbol: computer,
      title: "Mobile&Web Service Design",
      information:
        "사용자 조사 전략 구축 시장 조사를 바탕으로 제품과 서비스의 상용화를 위한 시각 디자인(Visual Design GUI)및 상호작용 디자인 (Interaction Design) 수행",
    },
    {
      Symbol: facturing,
      title: "AI&ML Utilized Design",
      information:
        "인공지능과 머신러닝을 활용하여 제품 및 서비스에 적용 가능성과 디자인 방법론에 대해서 탐색",
    },
    {
      Symbol: joystick,
      title: "AR&VR Service Design",
      information:
        "AR/VR 을 통해 상호작용이 발생하는 지점을 탐구하고 Creative한 체감형 가상 환경을 제시하는 연구를 진행",
    },
  ];


  //자주 묻는 질문들 내용 추가 (12-27 11:46)
  const QnA = {
    h3: "자주 묻는 질문들"
  }

  return (
    <div className="PageWrapper">
      <div className="introContainer">
        <div className="intro_text">
          <h2>Introduction</h2>
          <p>Mix Lab의 소개 페이지 입니다.</p>
        </div>
        <div className="gradient"></div>
        <div className="introbanner"></div>
      </div>
      <div className="PageContainer">
        <Section
          subText={data.subText}
          h3={data.h3}
          information={data.information}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={<IntroList data={Overview}></IntroList>}
        />


        {/* 자주 묻는 질문들 레이아웃 추가 (12-27 11:46) */}
        <Section
          h3={QnA.h3}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={<AccordionList></AccordionList>
        }
        />
      </div>
    </div>
  );
}
