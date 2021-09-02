import React from "react";
import "./styles/Card.css";

function Card() {
  return (
    <div className="cardContainer">
      <div className="base">
        <p className="title">name</p>
        <p className="text">description</p>
        <img src="" classname="imgCont" alt="" />
        <p className="cost">Valor</p>
      </div>
    </div>
  );
}

export default Card;
