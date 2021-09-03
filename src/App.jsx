import React, { useState } from "react";
import Info from "./info";
import Nav from "./components/Nav";
import Card from "./components/Card";
import SelectorOff from "./components/SelectorOff";
import SelectorOn from "./components/SelectorOn";
import "./index.css";
import "./components/styles/Button.css"

export const App = () => {
  const [, set] = useState();

  return (
    <div className="site">
      <Nav />
      <div className="container">
        <div className="selectLine">
          <SelectorOff />
          <div></div>
          <button type="submit" className="btn-submit">
            Botón
          </button>
        </div>
      </div>
      <Card />
    </div>
  );
};
