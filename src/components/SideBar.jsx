import React, { useState } from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import "../styles/sidebar.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("projects");
  const ProjectName = useParams().name;

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar-container">
      <div className="logo-cont" onClick={() => navigate("/")}>
        <img src="/lama-logo.svg" alt="lama" className="lama-logo" />
        <h1 className="lama">LAMA.</h1>
      </div>
      <p>Podcast upload flow</p>
      <div className="sidebar-links">
        <Link
          to={`/${ProjectName}/project-upload/`}
          className={activeLink === "projects" ? "crr-active" : ""}
          onClick={() => handleLinkClick("projects")}
        >
          <TbCircleNumber1Filled className="badge" />
          Projects
        </Link>
        <Link
          to={`/${ProjectName}/widget-configurations/`}
          className={activeLink === "widgetConfigurations" ? "crr-active" : ""}
          onClick={() => handleLinkClick("widgetConfigurations")}
        >
          <TbCircleNumber2Filled className="badge" />
          Widget Configurations
        </Link>
        <Link
          to={`/${ProjectName}/deployment/`}
          href="#"
          className={activeLink === "deployment" ? "crr-active" : ""}
          onClick={() => handleLinkClick("deployment")}
        >
          <TbCircleNumber3Filled className="badge" />
          Deployment
        </Link>
        <Link
          to={`/${ProjectName}/pricing/`}
          className={activeLink === "pricing" ? "crr-active" : ""}
          onClick={() => handleLinkClick("pricing")}
        >
          <TbCircleNumber4Filled className="badge" />
          Pricing
        </Link>
      </div>
      <div className="sidebar-setting">
        <Link
          to={`/settings/`}
          className={activeLink === "settings" ? "crr-active" : ""}
          onClick={() => handleLinkClick("settings")}
        >
          <IoSettingsOutline className="badge" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
