import React from "react";
import styles from "./Card_application.module.css";
import img from "../../Img/Icons/rightArrow.svg";

export default function Card_application(props) {
  function Background(props) {
    return (
      <div className={styles.Background}>
        <h1>새로운 MIXER가 되어 멋진 경험을 함께하세요.</h1>
        <h5>Become a new MIXER and share great experiences.</h5>
      </div>
    );
  }

  const contentOne = {
    title: "석사 연구원",
    subTitle: "Matser Student Researcher",
    content: [
      "연구 활동 : MIX LAB의 프로젝트에 참여하여 스터디와 연구를 진행합니다.",
      "지원 방식 : E-mail 지원(@tukorea.ac.kr) 및 면담",
      "지원 시기 : 모집 공고일",
      "지원 자격 : 디자인학사 학위자",
    ],
  };
  const contentTwo = {
    title: "학부생/프로젝트 연구원",
    subTitle: "Undergraduated Student Researcher",
    content: [
      "연구 활동 : MIX LAB의 프로젝트에 참여하여 스터디와 연구를 진행합니다.",
      "지원 방식 : E-mail 지원(@tukorea.ac.kr) 및 면담",
      "지원 시기 : 모집 공고일",
      "지원 자격 : 디자인공학부생 및 다양한 시너지를 낼 수 있는 타 학부생",
      "EH 상주 및 비상주 연구원으로 구분하여 모집",
    ],
  };

  function ApplyCard(props) {
    const list = props.data.content.map((item) => <li>{item}</li>);

    return (
      <div className={styles.ApplycardContainer}>
        <div className={styles.ApplycardTitle}>
          <h4>{props.data.title}</h4>
          <h5>{props.data.subTitle}</h5>
        </div>
        <div className={styles.ApplycardContent}>
          <ul>{list}</ul>
        </div>
        <div className={styles.ApplycardButton}>
          지원하기
          <img src={img} alt="" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Background></Background>
      <div className={styles.wrap}>
        <ApplyCard data={contentOne}></ApplyCard>
        <ApplyCard data={contentTwo}></ApplyCard>
      </div>
    </div>
  );
}
