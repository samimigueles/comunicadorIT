import React from "react";
import Explain from "../components/Explain";
import Feel from "../components/Feel";
import Have from "../components/Have";
import Higienize from "../components/Higienize";
import Not from "../components/Not";
import Wanted from "../components/Wanted";
import Yes from "../components/Yes";


export default function Home() {
  return (
    <div className="jumbotron">
      <div
        className="row"
        style={{
          border: "solid 5px",
          padding: 2,
          margin: 10,
          textAlign: "right",
          position: "relative",
          bottom: 50,
        }}
      >
        <Feel />
        <Have />
        <Wanted />
        <Higienize />
        <Explain />
        <Yes />
        <Not />
      </div>
    </div>
  );
}
