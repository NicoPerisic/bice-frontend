import React, {useState} from "react";
import "./styles/Card.css";
import urlInfo from "../info";

const Card = (props) => {

  const [data, setData] = useState({});

  urlInfo(props.id).then((info) => { setData(info) });

  return (
    <div className="cardContainer">
      <div className="base">
        <p className="title">{data.name}</p>
        <p className="text">{data.description}Descript</p>
        <img src="{img}" className="imgCont" alt="" />
        <p className="cost">{data.price}</p>

      </div>
    </div>
  );
}

export default Card;
