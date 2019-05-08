import React from "react";
import './style.css'
export default props => (
  <div className="sup-container">
    <img src={props.src} onDragStart={props.onDragStart} alt="" />
    <p className="legend">{props.name}</p>
  </div>
)
