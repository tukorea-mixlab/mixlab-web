import React, { useState, useRef, useEffect } from "react";
import styles from './Category.module.css'
import Dropdown from "./Dropdown";
import AccordionButton from '../Button/AccordionButton'


function Category(props){

  //열리고 닫히는 상태 표시
  let[dropdownVisibility, setDropdownVisibility] = useState(false);

  //내부 크기 측정하도 유무에 따라서 높이 조절, Css로는 transition이 안먹혀서 코드로 구현
  const [maxHeight, setMaxHeight] = useState(0);
  const Height = useRef(null);
  useEffect(() => {
    if (dropdownVisibility) {
      setMaxHeight(Height.current.clientHeight);
    } else {
      setMaxHeight(0);
    }
  }, [dropdownVisibility]);

  return(
    <div className={`${styles.Category} ${dropdownVisibility ? styles.active : ''}`}>
        <div className={styles.question}
          onClick={(e)=>setDropdownVisibility(!dropdownVisibility)}
        >
          <p>{props.question}</p>
          <AccordionButton
            dropdownVisibility = {dropdownVisibility}
          ></AccordionButton>
        </div>

        <Dropdown visibility={dropdownVisibility} maxHeight={maxHeight}>
        {/* props. */}
        <div ref={Height}>
          {props.Hyphen ? <ol type="A">
            <li>{props.answer}</li>
          </ol> : <div>{props.answer}</div>
          }
          
        </div>
        </Dropdown>
      </div>
  )
};

export default Category;