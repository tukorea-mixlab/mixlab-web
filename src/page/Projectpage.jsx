import { React, useState, useEffect } from "react";
import "./projectpage.css";

import computer from "../Img/Icons/computer.png";
import facturing from "../Img/Icons/facturing.png";
import joystick from "../Img/Icons/joystick.png";
import combination from "../Img/Icons/combination.png";
import Section from "../component/Section/Section";
import IntroList from "../component/Card/IntroList";
import Title from "../component/Title";
import { db, storage } from "../firebase";
import CardList from "../component/Card/CardList";

// import challenge from "../Img/Icons/challenge.png";

export default function Projectpage() {
  const datas = {
    subText: "Research Project",
    h3: "MIX LAB 연구 프로젝트",
    information: [" 기능대회, 어워드 등 연구 프로젝트 작업물입니다.  "],
  };

  const [data, setData] = useState([]);
  useEffect(function () {
    let Datas = [];
    db.collection("post")
      .get()
      .then(function (qs) {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });
        setData(Datas);
        console.log(Datas);
      });
  }, []);

  return (
    <div className="PageWrapper">
      <div className="introContainer">
        <div className="intro_text">
          <h2>Project</h2>
          <p>실패와 도전으로 디자인의 경계를 넓혀갑니다. </p>
        </div>
        <div className="gradient"></div>
        <div className="introbanner"></div>
      </div>
      <div className="PageContainer">
        <Section
          subText={datas.subText}
          h3={datas.h3}
          information={data.information}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={<CardList data={data} />}
        />
      </div>
    </div>
  );
}
