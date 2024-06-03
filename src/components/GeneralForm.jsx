import React from "react";

const GeneralForm = () => {
  return (
    <form className="widget-form-body">
      <div className="form-item">
        <label htmlFor="chatbot-name">ChatBot Name</label>
        <input type="text" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="form-item">
        <label htmlFor="welcome-message">Welcome Message</label>
        <input type="text" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="form-item">
        <label htmlFor="placeholder">Input Placeholder</label>
        <input type="text" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </form>
  );
};

export default GeneralForm;
