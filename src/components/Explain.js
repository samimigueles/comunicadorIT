import React from "react";

export default function Explain() {
  const question = ["¿Porqué?", "¿Quién?", "¿Cómo?"];

  const question2 = ["¿Dónde?", "¿Qué?    ", "¿Cuándo?"];

  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        left: 100,
        top: 320,
      }}
    >
      <h3
        style={{
          textAlign: "center",
          backgroundColor: "springgreen",
          border: "solid",
        }}
      >
        Explicar
      </h3>
      <div className="row">
        {question.map((q, index) => (
          <div className="col">
            <button
              href="#"
              className="btn btn-outline-success"
              key={index}
              href="#"
              style={{
                width: 90,
                border: "solid green",
                position: "relative",
                left: 2,
              }}
            >
              {q}
            </button>
          </div>
        ))}
      </div>
      <div
        className="row"
        style={{
          padding: 3,
          position: "relative",
          left: 3,
          textAlign: "center",
        }}
      >
        {question2.map((q, index) => (
          <div className="col">
            <button
              href="#"
              className="btn btn-outline-success"
              key={index}
              href="#"
              style={{ border: "solid green", width: 90, textAlign: "center" }}
            >
              {q}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
