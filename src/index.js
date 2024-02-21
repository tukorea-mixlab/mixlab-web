import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Mainpage from "./page/Mainpage";
import MainLayout from "./component/layout/MainLayout";
import Intropage from "./page/Intropage";
import Newspage from "./page/Newspage";
import Peoplepage from "./page/Peoplepage";
import ProjectDetailpage from "./page/PprojectDetailpage";
import NewsDetailpage from "./page/NewsDetailpage";
import AwardDetailpage from "./page/AwardDetailpage";

import Header from "../src/component/Header/Header";
import Projectpage from "./page/Projectpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Mainpage />}></Route>
        <Route path="/people" element={<Peoplepage />}></Route>
        <Route path="/intro" element={<Intropage />}></Route>
        <Route path="/project" element={<Projectpage />}></Route>
        <Route path="/news" element={<Newspage />}></Route>
        <Route path="/project/:id" element={<ProjectDetailpage />}></Route>
        <Route path="/news/:id" element={<NewsDetailpage />}></Route>
        <Route path="/award/:id" element={<AwardDetailpage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
