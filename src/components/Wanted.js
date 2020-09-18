import React from "react";

export default function Wanted() {
  const wanted1 = [
    "Agua",
    "Hielo",
    "Almohada",
    "Frazada",
    "Telefono",
    "Timbre, TV",
    "Sentarme",
    "Afeitarme",
    "Bañarme",
    "Peinarme",
    "Acostarme",
  ];

  const wanted2 = [
    "Dormir",
    "Familia",
    "Masaje",
    "Familia",
    "Orinar",
    "Medias",
    "Anteojos",
    "Loción",
    "Ejercicio",
    "Aspirador",
  ];

  return (
    <div>
      <h3
        style={{
          backgroundColor: "chocolate",
          width: 265,
          position: "relative",
          left: 240,
          textAlign: "center",
          border: "solid",
        }}
      >
        Quiero
      </h3>
      <div className="row">
        <div
          className="list-group"
          style={{
            width: 130,
            textAlign: "center",
            position: "relative",
            left: 250,
          }}
        >
          {wanted1.map((w, index) => (
            <a
              href="#"
              className="list-group-item list-group-item-action"
              key={index}
              style={{ border: "solid black", margin: 2 }}
            >
              {w}
            </a>
          ))}
        </div>
        <div
          className="list-group"
          style={{
            width: 130,
            textAlign: "center",
            position: "relative",
            left: 260,
          }}
        >
          {wanted2.map((w, index) => (
            <a
              href="#"
              className="list-group-item list-group-item-action"
              key={index}
              style={{ border: "solid black", margin: 2 }}
            >
              {w}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
