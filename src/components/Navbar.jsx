import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import axios from "axios";
import URL from "../urlConfig";

import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handelLogout = () => {
    setAuthenticatedUser({});
    navigate("/login");
  };

  const { authenticatedUser, setAuthenticatedUser } = useAuth();
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src="/lama-logo.svg" alt="lama" className="lama-logo" />
        <h1 className="lama">LAMA.</h1>
      </div>
      <div className="icons-container">
        <IoSettingsOutline className="setting-icon" />
        <FaRegBell className="notification-icon" />
        {authenticatedUser.id ? (
          <IoMdLogOut
            className="notification-icon"
            onClick={handelLogout}
            style={{ backgroundColor: "red" }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
