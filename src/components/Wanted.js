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
          left: 238,
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
            <button
            href="#"
            className="btn btn-outline-warning"
              key={index}
              style={{ border: "solid chocolate", margin: 2 }}
            >
              {w}
            </button>
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
            <button
            href="#"
            className="btn btn-outline-warning"
              key={index}
              style={{ border: "solid chocolate", margin: 2 }}
            >
              {w}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
