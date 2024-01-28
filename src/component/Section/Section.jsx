import React,{ forwardRef } from "react";
import Title from "../Title";
import Button from "../Button/Button";
import "./section.css";


//각 메인페이지에서 버튼을 누르면 각 Section으로 이동할 수 있도록 forwardRef를 활용
const Section = forwardRef((props, ref) => {
  return (
    <div className={props.className} ref ={ref}>
      {props.type == "right" ? props.children : ""}
      <Title
        width={props.width}
        type={props.type}
        subText={props.subText}
        h2={props.h2}
        information={props.information}
        alignItems={props.alignItems}
        align={props.align || "center"}
        className={`${props.className}inner`}
        children={
          props.type == "right" ? <Button onClick={props.onClick} className={"large line"} /> : ""
        }
      />
      {props.type != "right" ? props.children : ""}
    </div>
  )
});

export default Section;


// 원본
// https://www.daleseo.com/react-forward-ref/ 참고

// export default function Section(props) {
//   return (
//     <div className={props.className}>
//       {props.type == "right" ? props.children : ""}
//       <Title
//         width={props.width}
//         type={props.type}
//         subText={props.subText}
//         h2={props.h2}
//         information={props.information}
//         alignItems={props.alignItems}
//         align={props.align || "center"}
//         className={`${props.className}inner`}
//         children={
//           props.type == "right" ? <Button onClick={props.onClick} className={"large line"} /> : ""
//         }
//       />
//       {props.type != "right" ? props.children : ""}
//     </div>
//   );
// }