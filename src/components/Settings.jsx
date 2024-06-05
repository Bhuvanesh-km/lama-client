import React, { useEffect, useState } from "react";
import "../styles/settings.css";
import SideBar from "./SideBar";
import "../styles/settings.css";
import ProjectNav from "./ProjectNav";
import { useAuth } from "../context/authContext";
import axios from "axios";
import URL from "../urlConfig";

const Settings = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [onUsernameChange, setOnUsernameChange] = useState(false);
  const { authenticatedUser } = useAuth();

  useEffect(() => {
    console.log("userid", authenticatedUser.id);
    setUserName(authenticatedUser.username);
    setEmail(authenticatedUser.email);
  }, []);

  const updateUserName = async () => {
    try {
      const res = await axios.patch(
        `${URL.PATCH_USERNAME_URL}/${authenticatedUser.id}`,
        {
          withCredentials: true,
          username: userName,
        }
      );
      if (res.status !== 200) {
        throw new Error("Failed to update username");
      }

      authenticatedUser.username = userName;
      setOnUsernameChange(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handelUserNameChange = (e) => {
    setOnUsernameChange(true);
    setUserName(e.target.value);
  };

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
                  onChange={handelUserNameChange}
                />
                {onUsernameChange && (
                  <button className="save-btn" onClick={updateUserName}>
                    Save
                  </button>
                )}
              </div>
              <div className="form-item">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  readOnly
                />
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
