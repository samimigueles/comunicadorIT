import React from "react";

export default function Explain() {
  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        left: 350,
        bottom: 40,
      }}
    >
      <h4
        style={{
          textAlign: "center",
          backgroundColor: "springgreen",
          border: "solid",
        }}
      >
        Explicar
      </h4>
      <div className="row">
        <div className="col list-group">
          <a
            className="list-group-item list-group-item-action"
            href="#"
            style={{ border: "solid black" }}
          >
            ¿Porqué?
          </a>
        </div>
        <div className="col list-group">
          <a
            className="list-group-item list-group-item-action"
            href="#"
            style={{ border: "solid black" }}
          >
            ¿Quién?
          </a>
        </div>
        <div className="col list-group">
          <a
            className="list-group-item list-group-item-action"
            href="#"
            style={{ border: "solid black" }}
          >
            ¿Cómo?
          </a>
        </div>
        <div className="col list-group">
          <a
            className="list-group-item list-group-item-action"
            href="#"
            style={{ border: "solid black" }}
          >
            ¿Dónde?
          </a>
        </div>
        <div className="col list-group">
          <a
            className="list-group-item list-group-item-action"
            href="#"
            style={{ border: "solid black" }}
          >
            ¿Qué?
          </a>
        </div>
        <div className="col list-group">
          <a
            className="list-group-item list-group-item-action"
            href="#"
            style={{ border: "solid black" }}
          >
            ¿Cuándo?
          </a>
        </div>
      </div>
    </div>
  );
}
