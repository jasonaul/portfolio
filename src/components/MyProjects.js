import React from "react";
import "./ProjectCards.css";


const MyProjects = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p className="pro-text">{props.text}</p>
                <div className="pro-btns">
                    <a href={props.view}className="btn one">View</a>
                    <a href={props.source}className="btn two">Source</a>
                </div>
            </div>
        </div>

    )
}

export default MyProjects