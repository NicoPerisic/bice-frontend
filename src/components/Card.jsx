import React, {useState} from "react";
import "./styles/Card.css";
import urlInfo from "../info";

const Card = (props) => {

  const [data, setData] = useState({});

  urlInfo(props.id).then((info) => { setData(info) });

  return (
    <div className="cardContainer">
      <div className="base">
        <p className="title">{props.name}</p>
        <p className="text">{props.description}Descript</p>
        <img src="{img}" classname="imgCont" alt="" />
        <p className="cost">{props.price}</p>

      </div>
    </div>
  );
}

export default Card;
