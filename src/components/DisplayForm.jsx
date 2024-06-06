import React, { useState } from "react";
import "../styles/displayForm.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/slices/widgetSlice";

const DisplayForm = () => {
  const widgetData = useSelector((state) => state.widget.widgetData);
  const dispatch = useDispatch();

  const handelDisplayFormChange = (e) => {
    const { name, value } = e.target;

    dispatch(actions.updateWidgetData({ ...widgetData, [name]: value }));
  };

  return (
    <form className="widget-form-body">
      <div className="widget-form-top">
        <div className="widget-form-top-item">
          <div className="widget-form-left-item">
            <div className="form-item">
              <label htmlFor="primary-color">Primary Color</label>
              <div className="form-color-input">
                <input
                  name="primarycolor"
                  id="primaryColor"
                  type="text"
                  value={widgetData.primaryColor}
                  className="hex-color-input"
                  onChange={handelDisplayFormChange}
                />
                <input
                  type="color"
                  name="primaryColor"
                  id="primary-color-id"
                  value={widgetData.primarycolor}
                  onChange={handelDisplayFormChange}
                  className="color-input"
                />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="form-item">
                <label htmlFor="font-size">Font Size (in px)</label>
                <input
                  type="number"
                  name="fontSize"
                  id="font-size"
                  min={1}
                  value={widgetData.fontSize}
                  onChange={handelDisplayFormChange}
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="widget-form-right-item">
            <div className="form-item">
              <label htmlFor="font-color">Font Color</label>
              <div className="form-color-input">
                <input
                  name="fontcolor"
                  id="fontcolor"
                  type="text"
                  value={widgetData.fontColor}
                  className="hex-color-input"
                  onChange={handelDisplayFormChange}
                />
                <input
                  type="color"
                  name="fontColor"
                  id="font-color"
                  value={widgetData.fontcolor}
                  onChange={handelDisplayFormChange}
                  className="color-input"
                />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="form-item">
              <label htmlFor="chat-height">
                Chat Height (in % of total screen)
              </label>
              <input
                type="text"
                name="chatHeight"
                id="chat-height"
                value={widgetData.chatHeight}
                onChange={handelDisplayFormChange}
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="form-top-btm">
          <div className="form-item">
            <label htmlFor="souces">Show sources</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>toggle button</div>
        </div>
      </div>
      <div className="widget-form-bottom">
        <h3>Chat Icon</h3>
        <div className="widget-from-btm">
          <div className="widget-btm-left">
            <div className="form-item">
              <label htmlFor="chat icon">Chat Icon Size</label>
              <input
                type="text"
                name="chatIconSize"
                id="chat-icon"
                value={widgetData.chatIconSize}
                onChange={handelDisplayFormChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="distance">Distance from Bottom (in px)</label>
              <input
                type="number"
                name="distanceFromBottom"
                id="distance"
                value={widgetData.distanceFromBottom}
                onChange={handelDisplayFormChange}
              />
            </div>
          </div>
          <div className="widget-btm-right">
            <div className="form-item">
              <label htmlFor="position">Position on Screen</label>
              <input
                type="text"
                name="postionOnScreen"
                id="position"
                value={widgetData.postionOnScreen}
                onChange={handelDisplayFormChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="h-distance">Horizontal Distance (in px)</label>
              <input
                type="number"
                name="horizontalDistance"
                id="h-ditance"
                value={widgetData.horizontalDistance}
                onChange={handelDisplayFormChange}
              />
            </div>
          </div>
        </div>
        <div className="form-icon-container">
          <label htmlFor="icon">Bot Icon</label>
          <div className="upload-cont">
            <img src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" />
            <div className="bot-icon-upload">
              <button>Upload Image</button>
              <p>Recommended size 48*48px</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DisplayForm;
