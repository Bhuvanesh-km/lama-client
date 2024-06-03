import React, { useState } from "react";
import Breadcrumbs from "./BreadCrumbs";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";

import "../styles/transcript.css";

const Transcript = () => {
  const [editMode, setEditMode] = useState(false);
  const [transcript, setTranscript] = useState(`
  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. 
  
  In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains
  
  a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains
  `);
  const [transcriptCopy, setTranscriptCopy] = useState(transcript);

  const handelEditClick = () => {
    setTranscriptCopy(transcript);
    setEditMode(true);
  };

  const handelSaveClick = () => {
    setEditMode(false);
  };

  const handelDiscardClick = () => {
    setTranscript(transcriptCopy);
    setEditMode(false);
  };

  const handelChange = (e) => {
    setTranscript(e.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="edit-transcript-container">
        <nav className="nav-upload">
          <div className="breadcrumbs">
            <Breadcrumbs />
          </div>
          <div className="nav-icons">
            <div>
              <RiArrowDownSFill />
              <span>EN</span>
            </div>
            <img src="/eng.svg" alt="eng" />
            <FaRegBell className="notification-icon" />
          </div>
        </nav>
        <div className="edit-transcript-header">
          <h1>Edit Transcript</h1>
          {editMode ? (
            <div className="btns">
              <button onClick={handelDiscardClick} className="discard-btn">
                Discard
              </button>
              <button onClick={handelSaveClick} className="save-btn">
                Save & Exit
              </button>
            </div>
          ) : null}
        </div>
        <div className="edit-transcript-body">
          <div className="btns-container">
            {editMode ? null : (
              <>
                <button
                  className="tanscript-edit-btn"
                  onClick={handelEditClick}
                >
                  <MdOutlineEdit /> Edit Mode
                </button>
                <button className="transccript-search-btn">
                  <FaSearch />
                </button>
              </>
            )}
          </div>
          <div className="transcript">
            <textarea
              contentEditable={editMode}
              disabled={!editMode}
              className="transcript-textarea"
              onChange={handelChange}
              value={transcript}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcript;
