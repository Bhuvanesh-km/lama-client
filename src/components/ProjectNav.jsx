import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";

const ProjectNav = () => {
  return (
    <nav className="nav-upload">
      <div className="breadcrumbs">
        <BreadCrumbs />
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
  );
};

export default ProjectNav;
