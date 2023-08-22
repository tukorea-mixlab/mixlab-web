import React from "react";
import "./mainpage.css";
import Title from "../component/Title";
import challenge from "../Img/Icons/challenge.png";
import exploration from "../Img/Icons/exploration.png";
import entyusiasm from "../Img/Icons/entyusiasm.png";
import combination from "../Img/Icons/combination.png";
import IntroList from "../component/Card/IntroList";
import Button from "../component/Button/Button";
// import challenge from "../Img/Icons/challenge.png";

export default function Mainpage() {
  const Identity = [
    {
      Symbol: exploration,
      title: "Exploration",
      information: "사람을 탐구하고 새로운 경험을 만들어 나갑니다. ",
    },
    {
      Symbol: entyusiasm,
      title: "Enthusiasm",
      information: "열정적인 MIXER 들과 함께합니다.",
    },
    {
      Symbol: challenge,
      title: "Challenge",
      information: "실패와 도전으로 디자인의 경계를 넓혀 나갑니다. ",
    },
    {
      Symbol: combination,
      title: "Combination",
      information: "기술과 디자인의 결합을 통해서 혁신적 경험을 만들어냅니다.",
    },
  ];

  return (
    <div className="PageWrapper">
      <div className="mainContainer">
        <div className="textContainer">
          <div className="hero">
            <div className="title">
              <h1>Mix LAB,</h1> <h2>Interactive media : EH</h2>
            </div>
            <p>
              우리는 디자인(Design)과 구현(Making)을 통해 인터랙티브 미디어에
              의한 사용자 경험을 연구합니다.
              <br />
              한국공학대학교 디자인공학부의 인터랙티브 미디어 Engineering House,
              MIX LAB <br />” Make Intelligent eXperience ”
            </p>
          </div>
          <Button />
        </div>
        <div className="gradient"></div>
        <div className="mainbanner"></div>
      </div>
      <div className="PageContainer">
        <div className="identity">
          <Title
            subText={"MIX Lab`s Identity"}
            h3={"MIX LAB 추진방향"}
            information={[
              "MIX LAB의 아이덴티티는 탐구와 열정, 도전, 결합으로 ",
              <br />,
              " 총 4가지로 구성되어 있습니다.",
            ]}
          />

          <IntroList data={Identity}></IntroList>
        </div>

        <div className="recentnews">
          <Title
            subText={"MIX Lab`s Identity"}
            h3={"MIX LAB 추진방향"}
            information={[
              "MIX LAB의 아이덴티티는 탐구와 열정, 도전, 결합으로 ",
              <br />,
              " 총 4가지로 구성되어 있습니다.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
