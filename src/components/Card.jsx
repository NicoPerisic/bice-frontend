import React from "react";
import "./styles/Card.css";
import urlInfo from "../info"

function Card() {
  return (
    <div className="cardContainer">
      <div className="base">
        <p className="title">{name}</p>
        <p className="text">{description}</p>
        <img src="{img}" classname="imgCont" alt="" />
        <p className="cost">{price}</p>
      </div>
    </div>
  );
}

export default Card;
