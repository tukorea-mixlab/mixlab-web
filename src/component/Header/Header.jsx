import React from "react";
import styles from "./Header.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Svg } from "../../Img/Logo.svg";

function Nav(props) {
  const location = useLocation(); // 현재 위치 확인
  const isActive = location.pathname === props.to; // 현재 위치와 Nav의 경로가 일치하는지 확인
  console.log(props.to);
  return (
    <div
      className={`${styles.nav} ${isActive ? styles.activeNav : ""}`}
      onClick={props.onClick}
    >
      {props.title || "Navigation"}
    </div>
  );
}

function Header(props) {
  const nav = useNavigate();

  // 스크롤 초기화 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.navWrapper}>
          <Svg
            className={styles.logo}
            fill="var(--P1)"
            onClick={() => {
              nav("/");
            }}
          ></Svg>
          <div className={styles.navigation}>
            <Nav
              title="Introduction"
              to="/intro"
              onClick={function () {
                nav("/intro");
                scrollToTop(); // Nav 클릭 시 스크롤 초기화
                window.location.reload();
              }}
            />
            <Nav
              title="people"
              to="/people"
              onClick={function () {
                nav("/People");
                scrollToTop(); // Nav 클릭 시 스크롤 초기화
                window.location.reload();
              }}
            />
            <Nav
              title="project"
              to="/project"
              onClick={function () {
                console.log("des");
                nav("/project");
                scrollToTop(); // Nav 클릭 시 스크롤 초기화
                window.location.reload();
              }}
            />
            <Nav
              title="news"
              to="/news"
              onClick={function () {
                nav("/news");
                scrollToTop(); // Nav 클릭 시 스크롤 초기화
                window.location.reload();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
