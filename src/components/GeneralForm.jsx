import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/slices/widgetSlice";
import { useAuth } from "../context/authContext";

import axios from "axios";
import URL from "../urlConfig";

const GeneralForm = () => {
  const [generalFromChange, setGeneralFormChange] = useState(false);
  const { authenticatedUser } = useAuth();
  const dispatch = useDispatch();
  const widgetData = useSelector((state) => state.widget.widgetData);
  // console.log(widgetData);
  const handleGeneralFormChange = (e) => {
    const { name, value } = e.target;
    setGeneralFormChange(true);
    dispatch(actions.updateWidgetData({ ...widgetData, [name]: value }));
  };

  const handelSaveWidgetData = async (e) => {
    e.preventDefault();
    setGeneralFormChange(false);
    try {
      dispatch(actions.setLoading(true));
      const res = await axios.patch(
        `${URL.PATCH_WIDGETS_BY_USER_URL}/${authenticatedUser.id}`,
        widgetData,
        {
          withCredentials: true,
        }
      );
      dispatch(actions.updateWidgetData(res.data.data));
    } catch (error) {
      dispatch(actions.setError(error));
    }
  };

  if (widgetData.loading) {
    return <div>Loading...</div>;
  }

  if (widgetData.error) {
    return <div>Error: {widgetData.error.message}</div>;
  }

  return (
    <form className="widget-form-body">
      <div className="form-item">
        <label htmlFor="chatbot-name">ChatBot Name</label>
        <input
          type="text"
          name="chatBotName"
          id="chatbot-name"
          value={widgetData.chatBotName}
          onChange={handleGeneralFormChange}
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="form-item">
        <label htmlFor="welcome-message">Welcome Message</label>
        <input
          type="text"
          name="welcomeMessage"
          id="welcome-message"
          value={widgetData.welcomeMessage}
          onChange={handleGeneralFormChange}
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="form-item">
        <label htmlFor="placeholder">Input Placeholder</label>
        <input
          type="text"
          name="inputPlaceholder"
          id="placeholder"
          value={widgetData.inputPlaceholder}
          onChange={handleGeneralFormChange}
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      {generalFromChange && (
        <div className="form-item">
          <button
            type="submit"
            className="save-btn"
            onClick={handelSaveWidgetData}
          >
            Save
          </button>
        </div>
      )}
    </form>
  );
};

export default GeneralForm;
