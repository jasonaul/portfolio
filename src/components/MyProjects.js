import React from "react";
import "./ProjectCards.css";
import { NavLink } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";

const MyProjects = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="Project Image" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p className="pro-text">{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view}className="btn one">View</NavLink>
                    <NavLink to={props.source}className="btn two">Source</NavLink>
                </div>
            </div>
        </div>

    )
}

export default MyProjects