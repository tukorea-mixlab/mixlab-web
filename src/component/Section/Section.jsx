import React, { useState, useEffect, forwardRef } from "react";
import Title from "../Title";
import Button from "../Button/Button";
import "./section.css";

//각 메인페이지에서 버튼을 누르면 각 Section으로 이동할 수 있도록 forwardRef를 활용
const Section = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      // 섹션이 화면에 보이는지 확인

      const section = document.querySelector(`.section.${props.className}`);
      const rect = section.getBoundingClientRect();

      const isSectionTopVisible =
        rect.top + window.innerHeight / 2 <= window.innerHeight &&
        rect.bottom >= 0;

      const isSectionInWindow =
        rect.top + window.innerHeight / 2 >= 0 &&
        rect.top + window.innerHeight / 2 <= window.innerHeight &&
        rect.bottom >= 0;

      const isSectionOutWindowUpside =
        rect.top < 0 &&
        rect.bottom + window.innerHeight / 2 < window.innerHeight;
      const isSectionOutWindowDownside =
        rect.bottom > window.innerHeight &&
        rect.top + window.innerHeight / 2 > window.innerHeight;

      // 화면에 보이면 스타일 변경
      if (
        isSectionInWindow &&
        !isVisible &&
        !(isSectionOutWindowUpside || isSectionOutWindowDownside)
      ) {
        section.style.transform = "translateY(0px)";
        section.style.opacity = 1;
        setIsVisible(true);
      } else if (isSectionOutWindowDownside && isVisible) {
        setIsVisible(false);
        section.style.opacity = 0;
        section.style.transform = "translateY(24px)";
      } else if (isSectionOutWindowUpside && isVisible) {
        setIsVisible(false);
        section.style.opacity = 0;
        section.style.transform = "translateY(-24px)";
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.className, isVisible]);

  return (
    <div className={`section ${props.className}`} ref={ref}>
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
          props.type == "right" ? (
            <Button
              onClick={props.onClick}
              title={props.buttonText}
              className={"large line"}
            />
          ) : (
            ""
          )
        }
      />
      {props.type != "right" ? props.children : ""}
    </div>
  );
});

export default Section;
