import { React, useState, useEffect } from "react";
import "./newspage.css";
import { db, storage } from "../firebase";
import Section from "../component/Section/Section";

import CardList from "../component/Card/CardList";

// import challenge from "../Img/Icons/challenge.png";

export default function Newspage() {

  const [data, setData] = useState([]);
  useEffect(function () {
    let Datas = [];
    db.collection("awads")
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
          <h2>News</h2>
          <p>Mix Lab의 소식을 알려드립니다.</p>
        </div>
        <div className="gradient"></div>
        <div className="introbanner"></div>
      </div>
      <div className="PageContainer">
        <Section
            h3={"MIX LAB 수상 실적"}
            align={"center"}
            type={"center"}
            className={"identity"}
            children={<div>
              <CardList type={"award"} data={data} />
            </div>}
          />
      </div>
    </div>
  );
}
