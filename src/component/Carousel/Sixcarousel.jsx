import React from "react";
import "./carousel.css";
import { useNavigate } from "react-router";
import Subimg from "./Subimg";

export default function SixCarousel(props) {
  const nav = useNavigate();

  const list = props.data.map(function (item) {
    const projectlink = () => {
      const url = item.link;
      window.open(url, "_blank");
    };
    return <Subimg img={item.thumbnail} />;
  });

  return <div className={"carousel"}>{list}</div>;
}
