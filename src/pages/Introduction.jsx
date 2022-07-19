/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import React, { useEffect, useRef, useState } from "react";
import TypingText from "../components/TypingText";
import MouseMoveContent from "../components/MouseMoveContent";
import "./introduction.css";

function Introduction() {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();

  // first draw canvas
  const canvasInitDraw = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.beginPath();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      setCtx(canvas.getContext("2d"));

      if (ctx) {
        canvasInitDraw(canvas);
      }
    }
  }, []);

  const redraw = (x, y) => {
    const canvas = canvasRef.current;

    // canvas remove and first canvas add
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvasInitDraw(canvas);

    ctx.beginPath();
    ctx.globalCompositeOperation = "destination-in";
    // canvas background fill
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.arc(x, y, 115, 0, 2 * Math.PI); // moving mouse create circle canvas
    ctx.fill("evenodd");
  };

  const handleMouseMove = (event) => {
    setClientX(event.clientX);
    setClientY(event.clientY);

    redraw(event.clientX, event.clientY);
  };

  return (
    <div className="intro-wrapper" onMouseMove={handleMouseMove}>
      <div className="intro-canvas-wrapper">
        <canvas id="canvas" ref={canvasRef} />
      </div>
      <MouseMoveContent clientY={clientY} clientX={clientX} />
      <div className="intro-text-wrapper">
        <TypingText />
      </div>
    </div>
  );
}

export default Introduction;
