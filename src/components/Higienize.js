import React from "react";

export default function Higienize() {
  const higinize = ["Cara", "Boca", "Dientes", "Nariz", "Pelos", "Manos"];

  return (
    <div
      className="list-group"
      style={{
        width: 130,
        textAlign: "center",
        position: "relative",
        left: 265,
      }}
    >
      <h4 style={{ backgroundColor: "skyblue", border: "solid" }}>
        Higienizar
      </h4>
      {higinize.map((h, index) => (
        <a
          href="#"
          className="list-group-item list-group-item-action"
          key={index}
          style={{ border: "solid black", margin: 2 }}
        >
          {h}
        </a>
      ))}
    </div>
  );
}
