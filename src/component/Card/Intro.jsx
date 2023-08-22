import React from "react";
import styles from "../component.module.css";

export default function Intro(props) {
  return (
    <div className={styles.introContainer}>
      <div
        className={styles.icons}
        style={{ "--symbol": "url(" + props.icons + ")" }}
      ></div>

      <div className={styles.introTextWrapper}>
        <div className={styles.border}></div>
        <p className={styles.introtitle}>{props.introtitle}</p>
        <p className={styles.introexplanation}>{props.introexplanation}</p>
      </div>
    </div>
  );
}
