import React, { useState } from "react";
import styles from './Category.module.css'
import Dropdown from "./Dropdown";
import AccordionButton from '../Button/AccordionButton'


function Category(props){

  //열리고 닫히는 상태 표시
  let[dropdownVisibility, setDropdownVisibility] = useState(false);

  return(
    <div className={`${styles.Category} ${dropdownVisibility ? styles.active : ''}`}>
        <div className={styles.question}>
          <p>{props.question}</p>
          <AccordionButton
            onClick={(e)=>setDropdownVisibility(!dropdownVisibility)}
            dropdownVisibility = {dropdownVisibility}
          ></AccordionButton>
        </div>

        <Dropdown visibility={dropdownVisibility}>

        {/* props. */}
        <ol type="A">
          <li>{props.answer}</li>
        </ol>
        </Dropdown>
      </div>
  )
};

export default Category;