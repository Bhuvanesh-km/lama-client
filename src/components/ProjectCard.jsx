import React from "react";
import "../styles/projectCard.css";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  const { projectName } = props;
  const { episodes } = props;
  const navigate = useNavigate();
  let logoName = projectName
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
  if (logoName.length === 1)
    logoName = logoName[0].toUpperCase() + projectName[1].toUpperCase();
  if (logoName.length > 2) {
    logoName = logoName.slice(0, 2);
  }

  return (
    <div
      className="card"
      onClick={() => navigate(`/${projectName}/project-upload/`)}
    >
      <div className="card-logo">
        <h1>{logoName}</h1>
      </div>
      <div className="card-desc">
        <div>
          <h3>{projectName}</h3>
          <p>{episodes} Episodes</p>
        </div>
        <p>Last edited a week ago</p>
      </div>
    </div>
  );
};

export default ProjectCard;
