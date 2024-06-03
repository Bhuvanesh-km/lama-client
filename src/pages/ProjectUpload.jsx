import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const ProjectUpload = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default ProjectUpload;
