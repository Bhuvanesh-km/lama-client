import React from "react";
import ProjectsList from "../components/ProjectsList";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const CreateProjects = () => {
  const projectList = useSelector((state) => state.project.projects);
  return (
    <div>
      <Navbar />
      <div className="project-list">
        <ProjectsList projectList={projectList} />
      </div>
    </div>
  );
};

export default CreateProjects;
