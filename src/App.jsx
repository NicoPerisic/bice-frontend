import React, { useState } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
<<<<<<< HEAD
import SelectorOff from "./components/SelectorOff";
import SelectorOn from "./components/SelectorOn";
=======
import Selector from "./components/Selector";
>>>>>>> dev
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
