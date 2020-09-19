import React, { useRef, useEffect } from "react";

const Not = () => {
  /* const canvasRef = useRef(null);

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
 */
  return (
    <>
      <div
        style={{
          textAlign: "center",
          position: "relative",
          bottom: 250,
          right: 140,
        }}
      >
        {/* <a href="#">
          <canvas ref={canvasRef} width="100" height="100" ></canvas>
        </a> */}
        <button
          href="#"
          className="btn btn-outline-danger"
          style={{border: 'solid red', borderRadius: 90, width: 150, height: 150 }}
        >
          <h1>NO</h1>
        </button>
      </div>
    </>
  );
};

export default Not;
