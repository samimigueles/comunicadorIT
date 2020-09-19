import React from "react";

export default function Higienize() {
  const higienize = ["Cara", "Boca", "Dientes", "Nariz", "Pelos", "Manos"];

  return (
    <div
      className="list-group"
      style={{
        width: 150,
        textAlign: "center",
        position: "relative",
        left: 265,
      }}
    >
      <h3 style={{ backgroundColor: "skyblue", border: "solid" }}>
        Higienizar
      </h3>
      {higienize.map((h, index) => (
        <button 
          href="#"
          className= "btn btn-outline-info" 
          key={index}
          style={{ border: "solid skyblue", margin: 2 }}
        >
          {h}
        </button >
      ))}
    </div>
  );
}
