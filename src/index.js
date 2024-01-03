import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Mainpage from "./page/Mainpage";
import MainLayout from "./component/layout/MainLayout";
import Intropage from "./page/Intropage";
import Newspage from "./page/Newspage";
import Peoplepage from "./page/Peoplepage";

import Header from "../src/component/Header/Header";
import Projectpage from "./page/Projectpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Peoplepage />}></Route>
        <Route index element={<Mainpage />}></Route>
        <Route path="/intro" element={<Intropage />}></Route>
        <Route path="/project" element={<Projectpage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
