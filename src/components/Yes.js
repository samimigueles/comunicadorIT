import React, { useRef, useEffect } from "react";

const Yes = () => {
  /*  const canvasRef = useRef(null);

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
  }, []); */

  return (
    <>
      <div
        style={{
          textAlign: "center",
          position: "relative",
          bottom: 450,
          left: 10,
          borderRadius: 50,
        }}
      >
        {/* <a href="#">
          <canvas ref={canvasRef} width="100" height="100" />
        </a> */}
        <button
          href="#"
          className="btn btn-outline-success"
          style={{border: 'solid green', borderRadius: 90, width: 150, height: 150 }}
        >
          <h1>SI</h1>
        </button>
      </div>
    </>
  );
};

export default Yes;
