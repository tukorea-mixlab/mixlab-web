import React from "react";
import "./carousel.css";
import { useNavigate } from "react-router";
import Subimg from "./Subimg";

export default function SixCarousel(props) {
  const nav = useNavigate();

  const list = props.data.map(function (item) {
    return<Subimg
    key={item.id}
    img={item.thumbnail}
    onClick={function () {
      nav("/news/" + item.title)
    }}
    />;
  });

  return <div className={"carousel"}>{list}</div>;
}
