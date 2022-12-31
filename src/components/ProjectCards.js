import React from "react";
import "./ProjectCards.css";

import MyProjects from "./MyProjects";
import ProjectData from "./MyProjectsData";
import { getValue } from "@testing-library/user-event/dist/utils";

const ProjectCard = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">My recent <strong class="blue">Projects</strong></h1>
            <div className="project-container">
                {ProjectData.map((value, index) => {
                    return(
                        <MyProjects 
                            key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}
                            text={value.text}
                            view={value.view}
                            source={value.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectCard