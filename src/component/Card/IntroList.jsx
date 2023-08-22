import React from "react";
import Intro from "./Intro";
import styles from "../component.module.css";

export default function IntroList(props) {
  const list = props.data.map((item) => {
    return (
      <Intro
        key={item.id}
        icons={item.Symbol}
        introtitle={item.title}
        introexplanation={item.information}
      />
    );
  });

  return <div className={styles.introList}>{list}</div>;
}
