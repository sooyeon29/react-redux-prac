import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import About from "../pages/About";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes 안에 작성할때!!
        Route에는 react-router-dome에서 지원하는 props들이 있다 
        Path는 '주소'를 넣어주면 된다! element는 해당 주소로 이동했을때 보여주고싶은 컴포넌트이다!*/}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
