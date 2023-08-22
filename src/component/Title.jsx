import React from "react";
import styles from "./component.module.css";
export default function Title(props) {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.mainTitle}>
        <p className={styles.subText} style={{ "--align": "center" }}>
          {props.subText}
        </p>
        <h3 style={{ "--align": "center" }}>{props.h3}</h3>
      </div>
      <p className={styles.information} style={{ "--align": "center" }}>
        {props.information}
      </p>
    </div>
  );
}
