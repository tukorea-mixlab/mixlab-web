import React from "react";
import styles from "./component.module.css";
export default function Title(props) {
  // title type = left , center etc
  return (
    <div className={`${styles.titleContainer} ${props.className}`} style={{ width: props.width }}>
      <div
        className={styles.mainTitle}
        style={{ alignItems: props.alignItems }}
      >
        <p className={styles.subText} style={{ "--align": props.align }}>
          {props.subText}
        </p>
        <h2 style={{ "--align": props.align }}>{props.h2}</h2>
      </div>
      <p className={styles.information} style={{ "--align": props.align }}>
        {props.information}
      </p>
      {props.children}
    </div>
  );
}
