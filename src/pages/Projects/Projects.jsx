import React from 'react';
import "./Projects.css"
import ProjectsData from './ProjectsData';

function Projects(props) {
  return (
    <div className='projects-body'>
      {ProjectsData.map((project, index) => (
        <div key={index} className='projects-div'>
          <h1 className='projects-h1'>{project.heading}</h1>
          <p className='projects-p'>{project.description}</p>
          <button className='projects-button'><a className='projects-a' href={project.InfoLink} target="_blank">Source↗ </a></button>
          <button className='projects-button'><a className='projects-a' href={project.DemoLink} target="_blank">Live Demo↗</a></button>
        </div>
      ))}
    </div>
  );
}

export default Projects;
