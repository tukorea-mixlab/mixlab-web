import { React, useState, useEffect } from "react";
import "./newspage.css";
import { db, storage } from "../firebase";
import Section from "../component/Section/Section";

import CardList from "../component/Card/CardList";

// import challenge from "../Img/Icons/challenge.png";

export default function Newspage() {
  const [awardData, setAwardData] = useState([]);

  useEffect(function () {
    let Datas = [];
    db.collection("award")
      .get()
      .then(function (qs) {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });
        setAwardData(Datas);
      });
  }, []);

  const [newsData, setNewsData] = useState([]);

  useEffect(function () {
    let Datas = [];
    db.collection("news")
      .get()
      .then(function (qs) {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });
        setNewsData(Datas);
      });
  }, []);

  return (
    <div className="PageWrapper">
      <div className="introContainer">
        <div className="intro_text">
          <h2>News</h2>
          <p>Mix Lab의 소식을 알려드립니다.</p>
        </div>
        <div className="gradient"></div>
        <div className="introbanner"></div>
      </div>
      <div className="PageContainer">
        <Section
          h2={"MIX LAB 수상 실적"}
          information={"기능대회, 어워드 등 연구 프로젝트 작업물입니다."}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={
            <div>
              <CardList type={"award"} data={awardData} />
            </div>
          }
        />

        <Section
          subText={"Recent News"}
          h2={"MIX LAB의 최근 소식"}
          information={
            <div>
              MIXER들의 내외부 활동 및 MIX LAB에서
              <br />
              진행된 연구관련 새로운 소식입니다.
            </div>
          }
          align={"center"}
          type={"center"}
          className={"identity"}
          children={
            <div>
              <CardList type={"news"} data={newsData} />
            </div>
          }
        />
      </div>
    </div>
  );
}
