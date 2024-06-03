import React, { useRef, useState } from "react";
import Modal from "react-modal";
import "../styles/modalUpload.css";
import { useDispatch } from "react-redux";
import { actions } from "../redux/slices/projectSlice";
import { useParams } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "10px",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    width: "auto",
  },
};

const sourceTypes = ["youtube", "spotify", "rss"];

const ModelUpload = (props) => {
  const { imgurl, desc } = props;

  const projectName = useParams().name;
  const descwords = desc.split(" ");
  const source = descwords.filter((word) =>
    sourceTypes.includes(word.toLowerCase())
  )[0];

  // console.log(`/${source.toLowerCase()}.svg`);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const inputName = useRef(null);
  const inputUrl = useRef(null);

  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const uploadProject = (e) => {
    e.preventDefault();
    const name = inputName.current.value;
    const url = inputUrl.current.value;
    if (!name || !url) {
      console.log("Please enter a project name and url");
      setError("Please enter a project name and url");
      return;
    }
    setError(null);
    console.log(name);
    console.log(url);
    dispatch(
      actions.addFiletoProject({
        name: projectName,
        file: {
          id: Date.now(),
          fileName: name,
          fileLink: url,
          source: source,
        },
      })
    );
    closeModal();
    console.log("Project uploaded");
  };

  return (
    <div>
      <div className="card" onClick={openModal}>
        <div className="card-img">
          <img src={imgurl} alt="youtube" />
        </div>
        <div className="card-desc">
          <h3>
            {descwords[0]}
            <br />
            {descwords.splice(1, descwords.length).join(" ")}
          </h3>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Upload Modal"
      >
        <div className="upload-modal">
          <div className="upload-modal-header">
            <div className="modal-title">
              <img src={`/${source.toLowerCase()}.svg`} alt="youtube" />
              <h2>Upload from {source}</h2>
            </div>
            <button onClick={closeModal}>X</button>
          </div>
          <div className="upload-modal-body">
            <form action="submit">
              <div className="form-inputs">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter name" ref={inputName} />
              </div>
              <div className="form-inputs">
                <label htmlFor="url">Link</label>
                <input type="text" placeholder="Enter URL" ref={inputUrl} />
              </div>
              {
                // display error message if there is an error
                error && <div className="error">{error}</div>
              }
              <button
                className="btn-upload"
                type="submit"
                onClick={(e) => uploadProject(e)}
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModelUpload;
