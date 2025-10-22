// src/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Text from "./img/h1.png";
import DogFoot from "./img/dogfoot.png";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-root">
      <div className="container">
        <img src={DogFoot} alt="dogfoot" className="dogfoot" />
        <img src={Text} alt="text" className="text" />
        <button className="login" onClick={() => navigate("/login")}>로그인</button>
        <button className="join" onClick={() => navigate("/join")}>회원가입</button>
      </div>
    </div>
  );
}
