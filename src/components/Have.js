import React from "react";

export default function Have() {
  const having = ["Sed", "Hambre", "Frío", "Nauseas"];

  const call = ["Enfermera/o", "Médico"];

  return (
    <div>
      <div
        className="list-group"
        style={{
          width: 130,
          textAlign: "center",
          position: "relative",
          left: 220,
        }}
      >
        <h3
          style={{
            backgroundColor: "springgreen",
            border: "solid",
            position: "relative",
            left: 2,
          }}
        >
          Tengo
        </h3>
        {having.map((f, index) => (
          <button
            href="#"
            className="btn btn-outline-success"
            key={index}
            style={{ border: "solid green", margin: 2 }}
          >
            {f}
          </button>
        ))}
      </div>
      <div
        className="list-group"
        style={{
          width: 130,
          paddingTop: 25,
          textAlign: "center",
          position: "relative",
          left: 220,
        }}
      >
        <h3
          style={{
            backgroundColor: "skyblue",
            border: "solid",
            position: "relative",
            left: 2,
          }}
        >
          Llamar
        </h3>
        {call.map((f, index) => (
          <button
            href="#"
            className="btn btn-outline-info"
            key={index}
            style={{ border: "solid skyblue", margin: 2 }}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}
