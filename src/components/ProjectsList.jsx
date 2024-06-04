import React from "react";
import { SlHome } from "react-icons/sl";

import "../styles/projectsList.css";
import ProjectCard from "./ProjectCard";
import ModalProject from "./ModalProject";

const ProjectsList = ({ projectList }) => {
  return (
    <div className="projects-container">
      <button className="home">
        <SlHome />
        <p>Back to Home</p>
      </button>
      <div className="projectsList-container">
        <h1>Projects</h1>
        <ModalProject />
      </div>
      <div className="projects-cards">
        {
          // map through the project list and display each project
          projectList.map((project) => (
            <ProjectCard
              key={project._id}
              projectName={project.name}
              episodes={project.episodes}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ProjectsList;
