import React from "react";
import styles from './StudentCards.module.css'


export default function StudentCards(props) {

  // 학생 개개인 카드(2024-01-05 02:37)
  function StudentCard(props) {
    return (
      <div className={styles.StudentCard}>
        <img onerror="this.onerror=null;" />
        <div className={styles.StudentCard_content}>
          <div>
            <div className={styles.name}>{props.data.name}</div>
            <div className={styles.email}>useremail@tukorea.ac.kr</div>
          </div>
          <div>
            <div className={styles.department}>Media Design Engineering</div>
            <div className={styles.major}>UI/UX, Product Design</div>
          </div>
          <div className={styles.work}>Work: </div>
        </div>
      </div>
    );
  }


  // 학생 개개인 카드 여러개 묶어놓은 부분 (2024-01-05 02:37)
  return (
    <div className={styles.StudentCards}>
      {props.data.map(Data => (
        <StudentCard
          data = {Data}
        ></StudentCard>
      ))}
    </div>
  );
}
