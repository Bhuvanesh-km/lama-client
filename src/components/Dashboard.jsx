import React from "react";
import "../styles/dashboard.css";
import ProjectsList from "./ProjectsList";
import ModalProject from "./ModalProject";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const projectList = useSelector((state) => state.project.projects);
  return (
    <>
      {projectList.length > 0 ? (
        <div className="project-list">
          <ProjectsList projectList={projectList} />
        </div>
      ) : (
        <>
          <div className="dashboard-container">
            <h1 className="dashboard-heading">Create a New Project</h1>
            <img src="/Group.svg" alt="group-logo" className="dashboard-img" />
            <p className="dashboard-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in
            </p>
            <ModalProject />
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
