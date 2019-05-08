import React from "react";
import './style.css'
export default props => (
  <div className="sup-container">
    <a href={props.href}><img src={props.src} onDragStart={props.onDragStart} alt="" /></a>
    <p className="legend">{props.name}</p>
  </div>
)
