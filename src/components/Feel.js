import React from "react";

export default function Feel() {
  const feelings = [
    "comodo",
    "bien",
    "mejor",
    "peor",
    "triste",
    "inquieto",
    "asustado",
    "cansado",
    "acalorado",
    "mareado",
    "falta de aire",
    "sucio",
  ];

  return (
    <div
      className="list-group"
      style={{
        width: 130,
        textAlign: "center",
        position: "relative",
        left: 200,
      }}
    >
      <h3 style={{ backgroundColor: "orange", border: "solid" }}>Me siento</h3>
      {feelings.map((f, index) => (
        <a
          href="#"
          className="list-group-item list-group-item-action"
          key={index}
          style={{border:'solid black'}}
        >
          {f}
        </a>
      ))}
    </div>
  );
}
