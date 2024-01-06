import React from "react";
import { useNavigate } from "react-router";
import "./Card.css";
import Card from "./Card";

export default function CardList(props) {
  const nav = useNavigate();

  const list = props.data.map(function (item) {
    const projectlink = () => {
      const url = item.link;
      
      window.open(url, "_blank");
    };
    return (
      <Card
        thumbnail={item.img || item.thumbnail}
        key={item.title}
        title={item.title}
        info={item.info}
        //메인 뉴스(가로로 긴거)타입 추가
        mainNews={item.mainNews}
        // 카드에게 type 전달 2024-01-05(22:41)
        type={props.type}
        onClick={function () {
          console.log(item.title + "이동");

          props.type === "project"
            ? projectlink()
            : nav("/project/" + item.title);
        }}
      ></Card>
    );
  });

  return <div className={"maincontainer"}>{list}</div>;
}
