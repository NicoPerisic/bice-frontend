import React, { useState } from "react";
import Info from "./info";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Card from "./components/Card";
import SelectorOff from "./components/SelectorOff";
import SelectorOn from "./components/SelectorOn";
import "./index.css";

export const App = () => {
  const [, set] = useState();

  return (
    <div className="site">
      <Nav />
      <div className="container">
        <div className="selectLine">
          <SelectorOff />
          <div></div>
          <Button />
        </div>
      </div>
      <Card />
    </div>
  );
};
