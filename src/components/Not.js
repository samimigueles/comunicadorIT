import React, { useRef, useEffect } from "react";

const Not = () => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context);
  }, []);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          position: "relative",
          bottom: 250,
          left: 60,
        }}
      >
        <a href="#">
          <canvas ref={canvasRef} width="100" height="100" ></canvas>
        </a>
        <h1>NO</h1>
      </div>
    </>
  );
};

export default Not;
