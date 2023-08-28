import React from "react";
import "./footer.css";
import $ from "jquery";
import { ReactComponent as Svg } from "../../Img/Logo.svg";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footerContainer">
        <Svg
          className="logo"
          fill="var(--G4)"
          onClick={() => {
            // nav("/");
          }}
        ></Svg>
        <p>
          237, Sangidaehak-ro, Siheung-si, Gyeonggi-do, 15073 ,Republic of Korea{" "}
          <br /> Copyright© 2020 MIXLAB. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}
