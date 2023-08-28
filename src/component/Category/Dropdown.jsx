import React from "react";
import styles from './Dropdown.module.css'

function Dropdown (props){
  return(
    <div className={ props.visibility ? styles.dropdown : null }>
      { props.visibility && props.children }
    </div>
  )
};

export default Dropdown;