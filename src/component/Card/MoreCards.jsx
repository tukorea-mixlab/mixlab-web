import React from "react";
import styles from './MoreCards.module.css'

import Button from "../Button/Button";

export default function MoreCards(props) {

  const data = [
    {
      title1:'Who is ',
      title2:'MIXER',
      context:'MIX LAB의 구성원은 어떻게 되나요?',
      button:'More View'
    },
    {
      title1:'MIX LAB ',
      title2:'지원하기',
      context:'MIX LAB에서 함께할 분들을 찾습니다',
      button:'Apply'
    },
    {
      title1:'MIX LAB ',
      title2:'F&Q',
      context:'MIX LAB은 어떻게 들어가나요?',
      button:'More View'
    }
  ]

  // Mix LAB 더 알아보기 카드(2024-01-05 02:37)
  function MoreCard(props) {
    return (
      <div className={styles.MoreCard}>
        <div className={styles.title}>
          <span>{data[props.num].title1}</span>
          <span>{data[props.num].title2}</span>
        </div>
        <div className={styles.context}>
          {data[props.num].context}
        </div>
        <div className={styles.button}>
          <Button
            title={data[props.num].button}
          />
          {/* {data[props.num].context} */}
        </div>
      </div>
    );
  }


  // 학생 개개인 카드 여러개 묶어놓은 부분 (2024-01-05 02:37)
  return (
    <div className={styles.MoreCards}>
      {data.map((Data, num) => (
        <MoreCard
          num = {num}
        ></MoreCard>
      ))}
    </div>
  );
}
