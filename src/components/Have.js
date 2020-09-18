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
        <h3 style={{ backgroundColor: "green", border: "solid", position: "relative",
          left: 2}}>Tengo</h3>
        {having.map((f, index) => (
          <a
            href="#"
            className="list-group-item list-group-item-action"
            key={index}
            style={{ border: "solid black", margin: 2 }}
          >
            {f}
          </a>
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
        <h3 style={{ backgroundColor: "blue", border: "solid", position: "relative",
          left: 2 }}>Llamar</h3>
        {call.map((f, index) => (
          <a
            href="#"
            className="list-group-item list-group-item-action"
            key={index}
            style={{ border: "solid black", margin: 2 }}
          >
            {f}
          </a>
        ))}
      </div>
    </div>
  );
}
