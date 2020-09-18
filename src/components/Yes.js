import React, { useRef, useEffect } from "react";

const Yes = () => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context);
  }, [draw]);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          position: "relative",
          bottom: 550,
          right: 650,
        }}
      >
        <a href="#">
          <canvas ref={canvasRef}  width="100" height="100" />
        </a>
        <h1>SI</h1>
      </div>
    </>
  );
};

export default Yes;
