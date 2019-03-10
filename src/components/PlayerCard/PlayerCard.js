import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
      <div className="player-info">{props.name} #{props.number}, {props.position}
      </div>
    </div>
  </div>
);


export default PlayerCard;
