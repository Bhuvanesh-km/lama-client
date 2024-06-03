import React, { useState } from "react";
import ProjectNav from "./ProjectNav";

import "../styles/widgetConfig.css";
import GeneralForm from "./GeneralForm";
import DisplayForm from "./DisplayForm";

const WidgetConfigurations = () => {
  const [activeTab, setActiveTab] = useState("general");
  return (
    <div className="widget-container">
      <ProjectNav />
      <div className="widget-config-container">
        <h1>Configurations</h1>
        <div className="widget-form">
          <div className="widget-form-header">
            <div
              className={activeTab === "general" ? "active-tab" : ""}
              onClick={() => setActiveTab("general")}
            >
              General
            </div>
            <div
              className={activeTab === "display" ? "active-tab" : ""}
              onClick={() => setActiveTab("display")}
            >
              Display
            </div>
            <div
              className={activeTab === "advanced" ? "active-tab" : ""}
              // onClick={() => setActiveTab("advanced")}
            >
              Advanced
            </div>
          </div>

          {
            // if the active tab is general, display the general form
            activeTab === "general" && <GeneralForm />
          }
          {
            // if the active tab is display, display the display form
            activeTab === "display" && <DisplayForm />
          }
        </div>
      </div>
    </div>
  );
};

export default WidgetConfigurations;
