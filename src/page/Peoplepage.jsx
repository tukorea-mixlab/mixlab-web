import { React, useState } from "react";
import "./Peoplepage.css";
import hanjongkimImg from '../Img/People/hanjongkim.png'
import moonhwanleeImg from '../Img/People/moonhwanlee.png'

import FacultyCard from "../component/Card/FacultyCard";
import Section from "../component/Section/Section";
import Footer from "../component/Footer/Footer";

export default function People() {

  const professorData = [
    {
      name:'이문환 교수',
      image: moonhwanleeImg,
      position:'Assistant Professor',
      division:'Department of Design Engineering, TUKorea moonhwanlee@tukorea.ac.kr',
      email:'이문환 교수',
      major:'UX/UI Design, Interction Design',
      history : [
        '(학사) KAIST 산업디자인학과',
        '(석사) KAIST 산업디자인학과/TU-Delft(교환연구)',
        '(박사) KAIST 산업디자인학과'
      ]
    },
    {
      name:'김한종 교수',
      image: hanjongkimImg,
      position:'Assistant Professor',
      division:'Department of Design Engineering, TUKorea',
      email:'hanjongkim@tukorea.ac.kr',
      major:'Web-based 3D Graphics, Design Tool Development, SW System Design/Development',
      history : [
        '(학사) KAIST 산업디자인학과',
        '(석사) KAIST 산업디자인학과',
        '(박사) KAIST 산업디자인학과'
      ]
    },
  ];

  return (
    <div className="PageWrapper">
      <div className="introContainer">
        <div className="intro_text">
          <h2>People</h2>
          <p>열정적인 Mixer들과 함께합니다.</p>
        </div>
        <div className="gradient"></div>
        <div className="introbanner"></div>
      </div>
      <div className="PageContainer">
        <Section
          subText={"Faculty"}
          h3={"MIX LAB 교수진"}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={
            <div>
              <FacultyCard data = {professorData[0]}></FacultyCard>
              <FacultyCard data = {professorData[1]}></FacultyCard>
            </div>
        }
        />
      </div>
      <Footer></Footer>
    </div>
  );
}
