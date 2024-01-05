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
