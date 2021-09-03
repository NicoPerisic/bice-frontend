import React from "react";
import "./styles/Card.css";
import urlInfo from "../info"

const Card = (props) => {
  return (
    <div className="cardContainer">
      <div className="base">
      <p className="title">{props.id}</p>

      </div>
    </div>
  );
}

export default Card;
