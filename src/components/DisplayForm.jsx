import React, { useState } from "react";
import "../styles/displayForm.css";

const DisplayForm = () => {
  const [primarycolor, setPrimaryColor] = useState("#000000");
  const [fontcolor, setFontColor] = useState("#000000");

  const handlePrimaryColorChange = (e) => {
    setPrimaryColor(e.target.value);
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
                  type="text"
                  value={primarycolor}
                  className="hex-color-input"
                />
                <input
                  type="color"
                  name="primary-color"
                  id="primary-color"
                  value={primarycolor}
                  onChange={handlePrimaryColorChange}
                  className="color-input"
                />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="form-item">
                <label htmlFor="font-size">Font Size (in px)</label>
                <input
                  type="number"
                  name="font-size"
                  id="font-size"
                  min={1}
                  value={12}
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
                  type="text"
                  value={fontcolor}
                  className="hex-color-input"
                />
                <input
                  type="color"
                  name="font-color"
                  id="font-color"
                  value={fontcolor}
                  onChange={(e) => setFontColor(e.target.value)}
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
                name="chat-height"
                id="chat-height"
                value="lorem ipsuim"
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
                name="chat-icon"
                id="chat-icon"
                value="Small(48*48 px)"
              />
            </div>
            <div className="form-item">
              <label htmlFor="distance">Distance from Bottom (in px)</label>
              <input type="number" name="distance" id="distance" value="20" />
            </div>
          </div>
          <div className="widget-btm-right">
            <div className="form-item">
              <label htmlFor="position">Position on Screen</label>
              <input
                type="text"
                name="position"
                id="position"
                value="Bottom Right"
              />
            </div>
            <div className="form-item">
              <label htmlFor="h-distance">Horizontal Distance (in px)</label>
              <input
                type="number"
                name="h-distance"
                id="h-ditance"
                value="20"
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
