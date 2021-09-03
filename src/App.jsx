import React, { useState } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Selector from "./components/Selector";
import "./index.css";
import "./components/styles/Button.css";

export const App = () => {
  const [selectId, setSelectId] = useState(0);
  const [cardId, setCardId] = useState(0);

  function onSelect(id) {
    setCardId(id);
  }

  return (
    <div className="site">
      <Nav />
      <div className="container">
        <div className="selectLine">
          <Selector onChange={setSelectId} />
          <div>  </div>
          <button type="submit" className="btn-submit" onClick={(e) => {setCardId(selectId)}}>
            Seguir
          </button>
        </div>
      </div>
      <Card id={cardId}/>
    </div>
  );
};
