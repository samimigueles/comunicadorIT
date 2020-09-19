import React from "react";

export default function Feel() {
  const feelings = [
    "Comodo",
    "Bien",
    "Mejor",
    "Peor",
    "Triste",
    "Inquieto",
    "Asustado",
    "Cansado",
    "Acalorado",
    "Mareado",
    "Falta de aire",
    "Sucio",
  ];

  return (
    <div
      className="list-group"
      style={{
        width: 150,
        textAlign: "center",
        position: "relative",
        left: 200,
      }}
    >
      
        <h3 style={{border:'solid', backgroundColor:'chocolate'}}>Me siento</h3>
      {feelings.map((f, index) => (
        <button
          href="#"
          className="btn btn-outline-warning"
          key={index}
          style={{ border: "solid chocolate", margin: 2 }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
