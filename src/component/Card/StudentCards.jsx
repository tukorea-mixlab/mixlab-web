import React from "react";
import styles from './StudentCards.module.css'


export default function StudentCards(props) {

  // 학생 개개인 카드(2024-01-05 02:37)
  function StudentCard(props) {
    return (
      <div className={styles.StudentCard}>
        <img src="" alt="" />
        <div className={styles.StudentCard_content}>
          <div>
            <div className={styles.name}>황윤주</div>
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
      <StudentCard></StudentCard>
      <StudentCard></StudentCard>
      <StudentCard></StudentCard>
      <StudentCard></StudentCard>
      <StudentCard></StudentCard>
      <StudentCard></StudentCard>
    </div>
  );
}
