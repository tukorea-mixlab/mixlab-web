import React, { useState } from "react";
import styles from './Category.module.css'
import Dropdown from "./Dropdown";


function Category(props){
  let[dropdownVisibility, setDropdownVisibility] = useState(false);

  return(
      <div className={dropdownVisibility? styles.openCategory : styles.closeCategory}>
        <div className={styles.question}>
          <p>{props.question}</p>
          <button onClick={(e)=>setDropdownVisibility(!dropdownVisibility)}>{dropdownVisibility? 'Close' : 'Open'}</button> {/*button 컴포넌트 제작 안 해서 일단 이걸로 넣어둠 */}
        </div>
        <Dropdown visibility={dropdownVisibility}>
          <p>{props.answer}</p>
        </Dropdown>
      </div>
  )
};

export default Category;