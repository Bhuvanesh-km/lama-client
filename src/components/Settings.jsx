import React from "react";
import "../styles/settings.css";
import SideBar from "./SideBar";
import "../styles/settings.css";
import ProjectNav from "./ProjectNav";

const Settings = () => {
  const userName = "alphauser";
  const userEmail = "alphauser@gmail.com";
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="settings-container">
          <ProjectNav />
          <div className="account-container">
            <h1>Account Settings</h1>

            <div className="account-info">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="img"
                className="account-img"
              />
              <div className="form-item">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  value={userName}
                  name="username"
                  id="username"
                />
              </div>
              <div className="form-item">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={userEmail} />
              </div>
            </div>

            <div className="account-subscription">
              <h1>Subscriptions</h1>
              <div className="subscription-banner">
                <div className="subscription-title">
                  <span>You are currently on the</span>
                  <h2> Ques AI Basic Plan!</h2>
                </div>
                <button className="upgrad-btn">Upgrade</button>
              </div>
              <div className="cancel-subscription">
                <p>Cancel Subscription</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
