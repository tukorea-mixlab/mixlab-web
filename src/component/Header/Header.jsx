import React, { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Svg } from "../../Img/Logo.svg";
import CloseIcon from "../../Img/close.png";
import MenuIcon from "../../Img/hamburger.png";
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
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  // 스크롤 초기화 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const NaviContainer = () => {
    return (
      <div
        className={`${styles.navigation} ${isNavOpen ? styles.mobileNav : ""}`}
      >
        <Nav
          title="Introduction"
          to="/intro"
          onClick={function () {
            nav("/intro");
            scrollToTop(); // Nav 클릭 시 스크롤 초기화
            // window.location.reload();
          }}
        />
        <Nav
          title="People"
          to="/people"
          onClick={function () {
            nav("/people");
            scrollToTop(); // Nav 클릭 시 스크롤 초기화
            // window.location.reload();
          }}
        />
        <Nav
          title="Project"
          to="/project"
          onClick={function () {
            console.log("des");
            nav("/project");
            scrollToTop(); // Nav 클릭 시 스크롤 초기화
            // window.location.reload();
          }}
        />
        <Nav
          title="News"
          to="/news"
          onClick={function () {
            nav("/news");
            scrollToTop(); // Nav 클릭 시 스크롤 초기화
            // window.location.reload();
          }}
        />
      </div>
    );
  };

  return (
    <div className={`${styles.headerWrapper} ${isNavOpen ? styles.open : ""}`}>
      <div className={styles.headerContainer}>
        <div className={styles.navWrapper}>
          <Svg
            className={styles.logo}
            fill="var(--P1)"
            onClick={() => {
              nav("/");
            }}
          ></Svg>
        </div>
        <NaviContainer />
        <div className={styles.menuIcon} onClick={handleClick}>
          {isNavOpen ? <img src={CloseIcon} /> : <img src={MenuIcon} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
