import React from "react";
import styles from './Category.module.css'
import Category from "./Category";

function CategoryList (props){

  return(
    <div className={styles.list}>
      {props.QnA.map((category, index) => (
        <Category key={index} question={category.question} answer={category.answer} Hyphen={props.Hyphen}/>
      ))}
    </div>
  )
}

export default CategoryList;