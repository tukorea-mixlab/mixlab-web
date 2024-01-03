import React from "react";
import img from '../../Img/Icons/AccordionArrow.svg'
import styles from "./AccordionButton.module.css";

function AccordionButton(props) {
  return (
    <button className={`${styles.accordionButton} ${props.dropdownVisibility ? styles.active : ''}`}
      onClick={props.onClick}
    >
      <img src={img} alt="" />
    </button>
  );
}

export default AccordionButton;