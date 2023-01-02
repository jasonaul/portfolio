import React from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCards';



const Projects = () => {
  return (
    <>
    <div className='container'>
      <h1 className='project-heading'>My recent</h1>
    </div>
    <ProjectCard />
    
    </>
  );
}

export default Projects;


