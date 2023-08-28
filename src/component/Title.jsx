import React from "react";
import styles from "./component.module.css";
export default function Title(props) {
  // title type = left , center etc
  return (
    <div className={styles.titleContainer} style={{ width: props.width }}>
      <div
        className={styles.mainTitle}
        style={{ alignItems: props.alignItems }}
      >
        <p className={styles.subText} style={{ "--align": props.align }}>
          {props.subText}
        </p>
        <h3 style={{ "--align": props.align }}>{props.h3}</h3>
      </div>
      <p className={styles.information} style={{ "--align": props.align }}>
        {props.information}
      </p>
      {props.children}
    </div>
  );
}
