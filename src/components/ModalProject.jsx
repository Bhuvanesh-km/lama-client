import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { IoMdAddCircleOutline } from "react-icons/io";

import "../styles/modalProject.css";
import { useDispatch } from "react-redux";
import { actions } from "../redux/slices/projectSlice";

import { useAuth } from "../context/authContext";
import URL from "../urlConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

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

Modal.setAppElement("#root");

const ModalProject = () => {
  const { authenticatedUser } = useAuth();
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  function openModal() {
    if (!authenticatedUser.id) {
      navigate("/login");
      return;
    }
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const createProject = async (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    if (!name) {
      setError("Please enter a project name");
      return;
    }
    console.log(name);
    try {
      const response = await axios.post(URL.POST_PROJECT_URL, {
        name,
      });
      console.log(response.data);
      dispatch(actions.addProject(response.data.data));
    } catch (err) {
      console.log(err);
    }
    setError(null);
    closeModal();
  };

  return (
    <div>
      <button className="btn-cnp" onClick={openModal}>
        <IoMdAddCircleOutline className="btn-plus" />
        <p>Create New Project</p>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Project Modal"
      >
        <div className="create-project">
          <h2>Create Project</h2>
          <form>
            <label htmlFor="project-name">Enter Project Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type here"
              ref={inputRef}
            />
            {error && <p className="error">{error}</p>}
            <div className="modal-btn-container">
              <button className="btn btn-cancel" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="btn btn-create"
                onClick={(e) => createProject(e)}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProject;
