import { React, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./intropage.css";
import computer from "../Img/Icons/computer.png";
import facturing from "../Img/Icons/facturing.png";
import joystick from "../Img/Icons/joystick.png";
import combination from "../Img/Icons/combination.png";
import IntroList from "../component/Card/IntroList";
import Section from "../component/Section/Section";
import CategoryList from "../component/Category/CategoryList";
import Card_application from "../component/Card/Card_application";

export default function Intropage() {
  const data = {
    subText: "Overview",
    h2: "What is MIX LAB",
    information: [
      "MIX LAB은 한국공학대학교 디자인공학부의 인터랙티브 미디어 연구실입니다.",
      <br />,
      "우리는 디자인(Design)과 구현(Making)을 통해 인터랙티브 미디어에 의한 사용자 경험을 연구합니다.",
      <br />,
      " “Make Intelligent eXperience” ",
      <br />,
      " 사람들이 영리한 경험을 할 수 있는 서비스를 만들고자 하는 목표는 MIX Lab.의 시작이 되었습니다.",
    ],
  };

  const Overview = [
    {
      Symbol: computer,
      title: "Mobile&Web Service Design",
      information:
        "사용자 조사 전략 구축 시장 조사를 바탕으로 제품과 서비스의 상용화를 위한 시각 디자인(Visual Design GUI)및 상호작용 디자인 (Interaction Design) 수행",
    },
    {
      Symbol: facturing,
      title: "AI&ML Utilized Design",
      information:
        "인공지능과 머신러닝을 활용하여 제품 및 서비스에 적용 가능성과 디자인 방법론에 대해서 탐색",
    },
    {
      Symbol: joystick,
      title: "AR&VR Service Design",
      information:
        "AR/VR 을 통해 상호작용이 발생하는 지점을 탐구하고 Creative한 체감형 가상 환경을 제시하는 연구를 진행",
    },
  ];

  //자주 묻는 질문들 내용 추가 (12-27 11:46)
  const QnA = [
    {
      question: "Q1. 전공은 상관없나요?",
      answer:
        "산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.",
    },
    {
      question: "Q2. 연구실에서 어떤 활동을 하나요?",
      answer:
        "산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.",
    },
    {
      question: "Q3. 연구실 학생들의 진로는 어떻게 되나요?",
      answer:
        "산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.",
    },
    {
      question: "Q4 심사 기준(학년, 학점 등)이 어떻게 되나요?.",
      answer:
        "산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.",
    },
    {
      question: "Q5. 전공 능력이 뛰어나지 않아도 지원할 수 있나요?",
      answer:
        "산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.",
    },
    {
      question: "Q6. 석사 과정 수료 시 어떤 학위를 받게 되나요?",
      answer:
        "산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.",
    },
    {
      question: "Q7. 학부 연구생은 졸업 후 대학원으로 진학하나요?",
      answer:
        "산업디자인공학과, 미디어디자인공학과 전공 모두 지원 가능합니다. 또한 디자인전공과 시너지를 낼 수 있는 컴퓨터공학, 게임공학, 경영공학 전공자도 환영합니다.",
    },
  ];

  //Mix LAB 역사 추가 (12-31 16:03)
  const History = [
    {
      question: "Journal Articles",
      answer: (
        <div>
          <h4>2021</h4>
          <div>
            Kim, H. -J., Lee, M. -H., & Nam, T. -J. (2021). Deriving Design
            Requirements and Conceptual Scenarios of Temporary Negative Pressure
            Isolation Wards for Infectious Diseases. Archives of Design
            Research, 34(3), 137-153. Lee, M. H., Lee, H. M., Chung, S. T.
            (2021). Are You Watching Me?: The Design of a Video-based Learning
            Management System Using Learners” History Data. Archives of Design
            Research, 34(4), 225-239.
          </div>
          <br />
          <h4>2020</h4>
          <div>
            Lee, M. H. (2020). User-Adaptive Data Visualization in Daily Context
            through Everyday Objects. Archives of Design Research, 33(1), 5-15.
            Jeong, Y., Kim, H. J., Cho, H., & Nam, T. J. (2020). M. Integrator:
            a maker’s tool for integrating kinetic mechanisms and sensors.
            International Journal on Interactive Design and Manufacturing
            (IJIDeM), 14(1), 271-283.
          </div>
          <br />
          <h4>2019</h4>
          <div>
            Lee, M. H. (2019). Challenges of designing with open data: The case
            of cultural data. Archives of Design Research, 32(3), 57-72.
          </div>
          <br />
          <h4>2018</h4>
          <div>
            Lee, M. H., Row, Y. K., Son, O., Lee, U., Kim, J., Jeong, J., … &
            Nam, T. J. (2018). Flower-Pop: Facilitating casual group
            conversations with multiple mobile devices. Proceedings of the ACM
            on Interactive, Mobile, Wearable and Ubiquitous Technologies, 1(4),
            1-24. Lee, M. H. (2018). A study on Citizens’ public report
            application usage. Archives of Design Research, 31(3), 49-66. Kim,
            H. J., Jeong, Y., Kim, J. W., & Nam, T. J. (2018). A prototyping
            tool for kinetic mechanism design and fabrication: Developing and
            deploying M. Sketch for science, technology, engineering, the arts,
            and mathematics education. Advances in Mechanical Engineering,
            10(12), 1687814018804104.
          </div>
          <br />
          <h4>2016</h4>
          <div>
            Lee, M. H., & Nam, T. J. (2016). Possibility of Utilizing Digital
            Traces for Enhancing Emotional Values of Digital Artifacts. Archives
            of Design Research, 29(2), 65-77.
          </div>
          <br />
          <h4>2015</h4>
          <div>
            Lee, M. H., Cha, S., & Nam, T. J. (2015). Impact of digital traces
            on the appreciation of movie contents. Digital Creativity, 26(3-4),
            287-303.
          </div>
          <br />
          <h4>2011</h4>
          <div>
            이문환, & 남택진. (2011). 지능형 제품에서의 자동화가 감성적 경험
            형성에 미치는 영향: 지능형 화분 사례를 중심으로. Archives of Design
            Research, 24(2), 195-206.
          </div>
        </div>
      ),
    },
    {
      question: "International Conference Proceedings",
      answer: (
        <div>
          <h4>2021</h4>
          <div>
            Kim, H. -J., Lee, M. -H., & Nam, T. -J. (2021). Deriving Design
            Requirements and Conceptual Scenarios of Temporary Negative Pressure
            Isolation Wards for Infectious Diseases. Archives of Design
            Research, 34(3), 137-153. Lee, M. H., Lee, H. M., Chung, S. T.
            (2021). Are You Watching Me?: The Design of a Video-based Learning
            Management System Using Learners” History Data. Archives of Design
            Research, 34(4), 225-239.
          </div>
          <br />
          <h4>2020</h4>
          <div>
            Lee, M. H. (2020). User-Adaptive Data Visualization in Daily Context
            through Everyday Objects. Archives of Design Research, 33(1), 5-15.
            Jeong, Y., Kim, H. J., Cho, H., & Nam, T. J. (2020). M. Integrator:
            a maker’s tool for integrating kinetic mechanisms and sensors.
            International Journal on Interactive Design and Manufacturing
            (IJIDeM), 14(1), 271-283.
          </div>
          <br />
          <h4>2019</h4>
          <div>
            Lee, M. H. (2019). Challenges of designing with open data: The case
            of cultural data. Archives of Design Research, 32(3), 57-72.
          </div>
          <br />
          <h4>2018</h4>
          <div>
            Lee, M. H., Row, Y. K., Son, O., Lee, U., Kim, J., Jeong, J., … &
            Nam, T. J. (2018). Flower-Pop: Facilitating casual group
            conversations with multiple mobile devices. Proceedings of the ACM
            on Interactive, Mobile, Wearable and Ubiquitous Technologies, 1(4),
            1-24. Lee, M. H. (2018). A study on Citizens’ public report
            application usage. Archives of Design Research, 31(3), 49-66. Kim,
            H. J., Jeong, Y., Kim, J. W., & Nam, T. J. (2018). A prototyping
            tool for kinetic mechanism design and fabrication: Developing and
            deploying M. Sketch for science, technology, engineering, the arts,
            and mathematics education. Advances in Mechanical Engineering,
            10(12), 1687814018804104.
          </div>
          <br />
          <h4>2016</h4>
          <div>
            Lee, M. H., & Nam, T. J. (2016). Possibility of Utilizing Digital
            Traces for Enhancing Emotional Values of Digital Artifacts. Archives
            of Design Research, 29(2), 65-77.
          </div>
          <br />
          <h4>2015</h4>
          <div>
            Lee, M. H., Cha, S., & Nam, T. J. (2015). Impact of digital traces
            on the appreciation of movie contents. Digital Creativity, 26(3-4),
            287-303.
          </div>
          <br />
          <h4>2011</h4>
          <div>
            이문환, & 남택진. (2011). 지능형 제품에서의 자동화가 감성적 경험
            형성에 미치는 영향: 지능형 화분 사례를 중심으로. Archives of Design
            Research, 24(2), 195-206.
          </div>
        </div>
      ),
    },
    {
      question: "Domestic Conference Proceedings",
      answer: (
        <div>
          <h4>2021</h4>
          <div>
            Kim, H. -J., Lee, M. -H., & Nam, T. -J. (2021). Deriving Design
            Requirements and Conceptual Scenarios of Temporary Negative Pressure
            Isolation Wards for Infectious Diseases. Archives of Design
            Research, 34(3), 137-153. Lee, M. H., Lee, H. M., Chung, S. T.
            (2021). Are You Watching Me?: The Design of a Video-based Learning
            Management System Using Learners” History Data. Archives of Design
            Research, 34(4), 225-239.
          </div>
          <br />
          <h4>2020</h4>
          <div>
            Lee, M. H. (2020). User-Adaptive Data Visualization in Daily Context
            through Everyday Objects. Archives of Design Research, 33(1), 5-15.
            Jeong, Y., Kim, H. J., Cho, H., & Nam, T. J. (2020). M. Integrator:
            a maker’s tool for integrating kinetic mechanisms and sensors.
            International Journal on Interactive Design and Manufacturing
            (IJIDeM), 14(1), 271-283.
          </div>
          <br />
          <h4>2019</h4>
          <div>
            Lee, M. H. (2019). Challenges of designing with open data: The case
            of cultural data. Archives of Design Research, 32(3), 57-72.
          </div>
          <br />
          <h4>2018</h4>
          <div>
            Lee, M. H., Row, Y. K., Son, O., Lee, U., Kim, J., Jeong, J., … &
            Nam, T. J. (2018). Flower-Pop: Facilitating casual group
            conversations with multiple mobile devices. Proceedings of the ACM
            on Interactive, Mobile, Wearable and Ubiquitous Technologies, 1(4),
            1-24. Lee, M. H. (2018). A study on Citizens’ public report
            application usage. Archives of Design Research, 31(3), 49-66. Kim,
            H. J., Jeong, Y., Kim, J. W., & Nam, T. J. (2018). A prototyping
            tool for kinetic mechanism design and fabrication: Developing and
            deploying M. Sketch for science, technology, engineering, the arts,
            and mathematics education. Advances in Mechanical Engineering,
            10(12), 1687814018804104.
          </div>
          <br />
          <h4>2016</h4>
          <div>
            Lee, M. H., & Nam, T. J. (2016). Possibility of Utilizing Digital
            Traces for Enhancing Emotional Values of Digital Artifacts. Archives
            of Design Research, 29(2), 65-77.
          </div>
          <br />
          <h4>2015</h4>
          <div>
            Lee, M. H., Cha, S., & Nam, T. J. (2015). Impact of digital traces
            on the appreciation of movie contents. Digital Creativity, 26(3-4),
            287-303.
          </div>
          <br />
          <h4>2011</h4>
          <div>
            이문환, & 남택진. (2011). 지능형 제품에서의 자동화가 감성적 경험
            형성에 미치는 영향: 지능형 화분 사례를 중심으로. Archives of Design
            Research, 24(2), 195-206.
          </div>
        </div>
      ),
    },
  ];

  const location = useLocation();
  const applyRef = useRef(null);
  const fnqRef = useRef(null);

  useEffect(() => {
    
    const focusToApply = new URLSearchParams(location.search).get('focusToApply');
    const focusToFnq = new URLSearchParams(location.search).get('focusToFnq');
      if (focusToApply === 'true') {
        var headerOffset = 180;
        const elementPosition = applyRef.current.getBoundingClientRect().top;
        const offestPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offestPosition});
      }else if(focusToFnq === 'true'){
        var headerOffset = 180;
        const elementPosition = fnqRef.current.getBoundingClientRect().top;
        const offestPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offestPosition});
    }
  })

  return (
    <div className="PageWrapper">
      <div className="introContainer">
        <div className="intro_text">
          <h2>Introduction</h2>
          <p>Mix Lab의 소개 페이지 입니다.</p>
        </div>
        <div className="gradient"></div>
        <div className="introbanner"></div>
      </div>
      <div className="PageContainer">
        <Section
          subText={data.subText}
          h2={data.h2}
          information={data.information}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={<IntroList data={Overview}></IntroList>}
        />

        {/* 자주 묻는 질문들 레이아웃 추가 (12-27 11:46) */}
        <Section
          ref={fnqRef}
          h2={"자주 묻는 질문들"}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={<CategoryList QnA={QnA} Hyphen={true}></CategoryList>}
        />

        {/* 믹스랩 추가 (12-31 22:08) */}
        <Section
          h2={"MIX LAB 역사"}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={<CategoryList QnA={History} Hyphen={false}></CategoryList>}
        />

        {/*Mix지원하기 추가 (12-31 22:08) */}
        <Section
          ref={applyRef}
          h2={"MIX LAB에 지원하기"}
          align={"center"}
          type={"center"}
          className={"identity"}
          children={
            <div>
              <Card_application></Card_application>
            </div>
          }
        />
      </div>
    </div>
  );
}
