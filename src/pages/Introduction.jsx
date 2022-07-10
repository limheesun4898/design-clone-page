/* eslint-disable no-undef */
import React, { useState } from "react";
import TypingText from "../components/TypingText";
import MouseOverContent from "../components/MouseOverContent";
import MainBg from "../assets/images/main_bg.png";
import "./introduction.css";

function Introduction() {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const handleMouseMove = (event) => {
    setClientX(event.clientX);
    setClientY(event.clientY);
  };

  return (
    <div
      className="intro-wrapper"
      onMouseMove={(event) => {
        handleMouseMove(event);
      }}
    >
      <MouseOverContent clientY={clientY} clientX={clientX} />
      <img className="main-bg" src={MainBg} alt="main_bg" />
      <div className="intro-text-wrapper">
        <TypingText />
      </div>
    </div>
  );
}

export default Introduction;
