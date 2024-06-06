import React, { useEffect, useState } from "react";
import ProjectNav from "./ProjectNav";

import "../styles/widgetConfig.css";
import GeneralForm from "./GeneralForm";
import DisplayForm from "./DisplayForm";
import { useAuth } from "../context/authContext";

import axios from "axios";
import URL from "../urlConfig";
import { actions } from "../redux/slices/widgetSlice";
import { useDispatch, useSelector } from "react-redux";

const WidgetConfigurations = () => {
  const [activeTab, setActiveTab] = useState("general");

  const dispatch = useDispatch();
  // const widgetData = useSelector((state) => state.widgetData); // get the widget data from the redux store

  const { authenticatedUser } = useAuth();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          `${URL.GET_WIDGETS_BY_USER_URL}${authenticatedUser._id}`,
          {
            withCredentials: true,
          }
        );
        const widgetData = res.data.data[0];
        dispatch(actions.addFetchedWidgetData(widgetData));
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
