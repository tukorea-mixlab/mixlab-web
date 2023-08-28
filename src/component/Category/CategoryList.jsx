import React from "react";
import styles from './Category.module.css'
import Category from "./Category";

function CategoryList (props){
  return(
    <div className="list">
      <Category question={'Q1. 전공은 상관없나요?'} answer={'A. 산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다. '}></Category>
      <Category question={'Q2.'} answer={'A2.'}></Category>
    </div>
  )
}

export default CategoryList;