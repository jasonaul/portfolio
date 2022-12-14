import React from "react";
import './Popup.css'
 
const Popup = props => {
  return (props.trigger) ? (
    <>
    <div className="popup-box">
      <div className="box">
        <button className="close-icon" onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
    </>
  ) : "";
};
 
export default Popup;