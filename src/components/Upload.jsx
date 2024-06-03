import React, { useEffect, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useSelector } from "react-redux";

import UploadCard from "./UploadCard";
import "../styles/upload.css";
import { useParams } from "react-router-dom";
import DisplayFiles from "./DisplayFiles";
import ProjectNav from "./ProjectNav";

const Upload = () => {
  const projectList = useSelector((state) => state.project.projects);
  const [projectFiles, setProjectFiles] = useState([]);
  const params = useParams();

  useEffect(() => {
    // fetch the project details
    projectList.map((project) => {
      if (project.name == params.name) {
        setProjectFiles(project.files);
        console.log(project.files);
      }
    });
  }, [projectList]);

  const imgurls = ["/youtube.svg", "/spotify.svg", "/rss.svg"];
  const cardDescs = [
    "Upload Youtube video",
    "Upload Spotify podcast",
    "Upload from RSS feed",
  ];

  return (
    <div className="upload-container">
      <ProjectNav />
      <div className="upload-form-container">
        <h1>Upload</h1>
        <div className="upload-options">
          <div className="options">
            {
              // map through the card descriptions and display each card
              cardDescs.map((desc, index) => (
                <UploadCard key={index} imgurl={imgurls[index]} desc={desc} />
              ))
            }
          </div>
          <div className="options">
            {projectFiles.length == 0 &&
              // map through the card descriptions and display each card
              cardDescs.map((desc, index) => (
                <UploadCard key={index} imgurl={imgurls[index]} desc={desc} />
              ))}
          </div>
        </div>
        {
          // if there are files in the project, display them
          projectFiles.length > 0 ? (
            <DisplayFiles files={projectFiles} />
          ) : (
            <>
              <div className="or">or</div>
              <div className="cloud-upload">
                <MdOutlineCloudUpload className="cloud-icon" />
                <p>
                  Select a file or drag and drop here (Podcast Media or
                  Transcription Text)
                </p>
                <p className="upload-types">
                  MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
                </p>
                <button className="upload-btn">Select File</button>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Upload;
