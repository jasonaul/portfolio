import React from "react";
import "./ProjectCards.css";
import vgcombined from "../../src/assets/combined1.jpg"
import { NavLink } from "react-router-dom";

const ProjectCard = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={vgcombined} alt="Project Image" />
                    <h2 className="project-title">Project Title</h2>
                    <div className="pro-details">
                        <p className="pro-text">This is the placeholder text for a project's details. This is the placeholder text for a project's details. This is the placeholder text for a project's details.</p>
                        <div className="pro-btns">
                            <NavLink to="url.com" className="btn">View</NavLink>
                            <NavLink to="http://url.com" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard