import React, { useState } from "react";
import "./styles/Card.css";
import urlInfo from "../info";

<<<<<<< HEAD
function Card() {
  return (
    <div className="cardContainer">
      <div className="base">
        <p className="title">{name}</p>
        <p className="text">{description}</p>
        <img src="{img}" classname="imgCont" alt="" />
        <p className="cost">{price}</p>
=======
const Card = (props) => {
  const [data, setData] = useState({});
  if (props.id !== 0 && props.id !== data.id) {
    urlInfo(props.id).then((info) => {
      setData(info);
    });
  }

  let name = data.insurance ? data.insurance.name : "";
  let description = data.insurance ? data.insurance.description : "";
  let price = data.insurance ? data.insurance.price : "";
  let image = data.insurance ? data.insurance.image : "";

  return data.insurance ? (
    <div className="cardContainer">
      <div className="base">
        <img src={image} className="imgCont" alt="" />
        <p className="cost">{price}</p>
        <p className="title">{name}</p>
        <p className="text">{description}</p>
>>>>>>> dev
      </div>
    </div>
  ) : (
    ""
  );
};

export default Card;
