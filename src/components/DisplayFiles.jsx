import React from "react";
import "../styles/displayFiles.css";
import { useNavigate, useParams } from "react-router-dom";

const DisplayFiles = (props) => {
  const { files } = props;
  const projectName = useParams().name;
  const navigate = useNavigate();
  return (
    <div className="display-container">
      <div className="advertisement">
        <div>All files are processed! Your widget is ready to go!</div>
        <button>Try it out!</button>
      </div>
      <div className="grid-container">
        <div className="grid-header">
          <div className="grid-cell-3">Name</div>
          <div className="grid-cell-4">Upload Date & Time</div>
          <div className="grid-cell-1">Status</div>
          <div className="grid-cell-2">Actions</div>
        </div>
        {files.map((item) => (
          <div className="grid-row" key={item.id}>
            <div className="grid-cell-3">{item.name}</div>
            <div className="grid-cell-4">
              {new Date(item.id).toLocaleDateString() +
                " | " +
                new Date(item.id).toLocaleTimeString()}
            </div>
            <div className="grid-cell-1">Done</div>
            <div className="grid-cell-2">
              <button
                className="edit-btn"
                onClick={() => navigate(`/${projectName}/transcript/`)}
              >
                edit
              </button>
              <button className="delete-btn">delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayFiles;
