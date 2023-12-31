import React from "react";
import styles from './Category.module.css'
import Category from "./Category";

function CategoryList (props){
  return(
    <div className={styles.list}>
      <Category question={'Q1. 전공은 상관없나요?'} answer={'산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.'}></Category>
      <Category question={'Q2. 연구실에서 어떤 활동을 하나요?'} answer={'산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.'}></Category>
      <Category question={'Q3. 연구실 학생들의 진로는 어떻게 되나요?'} answer={'산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.'}></Category>
      <Category question={'Q4 심사 기준(학년, 학점 등)이 어떻게 되나요?.'} answer={'산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.'}></Category>
      <Category question={'Q5. 전공 능력이 뛰어나지 않아도 지원할 수 있나요?'} answer={'산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.'}></Category>
      <Category question={'Q6. 석사 과정 수료 시 어떤 학위를 받게 되나요?'} answer={'산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.'}></Category>
      <Category question={'Q7. 학부 연구생은 졸업 후 대학원으로 진학하나요?'} answer={'산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.'}></Category>
    </div>
  )
}

export default CategoryList;