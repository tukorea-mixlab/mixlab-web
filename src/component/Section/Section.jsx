import React from "react";
import Title from "../Title";
import Button from "../Button/Button";
import "./section.css";

//될 수 있으면 Title의 props로 전달할 수 있도록 제작해보기

export default function Section(props) {
  return (
    <div className={props.className}>
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
          props.type == "right" ? <Button className={"large line"} /> : ""
        }
      />
      {props.type != "right" ? props.children : ""}
    </div>
  );
}
