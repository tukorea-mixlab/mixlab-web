import { React, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const projectdatas = {
    subText: "Research Project",
    h2: "MIX LAB 연구 프로젝트",
    information: [" 기능대회, 어워드 등 연구 프로젝트 작업물입니다.  "],
  };

  const workdatas = {
    subText: "Our Works",
    h2: "Mixer들의 작품",
    information: [
      " 학기 과제물, 개인 작업, 졸업작품등 MIXER들의 작업물입니다. ",
    ],
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

  const [workdata, setWorkData] = useState([]);
  useEffect(function () {
    let Datas = [];
    db.collection("project_works")
      .get()
      .then(function (qs) {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });
        setWorkData(Datas);
        console.log(Datas);
      });
  }, []);

  const location = useLocation();
  //버튼으로 이동했을때, 바로 프로젝트가 보일 수 있도록 스크롤
  useEffect(() => {
    const scroll = new URLSearchParams(location.search).get('scrollToTarget');
    if (scroll === 'true') {
      window.scrollTo(0, document.getElementById('target').offsetTop - 120);
    }
  })

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
      <div id="target" className="PageContainer">
        <Section
          subText={projectdatas.subText}
          h2={projectdatas.h2}
          information={projectdatas.information}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={<CardList type={"project"} data={data} />}
        />

        <Section
          subText={workdatas.subText}
          h2={workdatas.h2}
          information={workdatas.information}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={<CardList type={"work"} data={workdata} />}
        />
      </div>
    </div>
  );
}
