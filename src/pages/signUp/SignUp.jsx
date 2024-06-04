import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import URL from "../../urlConfig";

import "./signUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const userDetails = { username, email, password, confirmPassword };
      // console.log("userDetails", userDetails);

      const response = await axios.post(URL.SIGNUP_URL, userDetails);
      console.log("response", response);
      setLoading(false);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError("An error occurred");
      console.log(error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form>
          <div className="signup-item">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-item">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="link">
            <Link to="/login" className="">
              Already have an account? Login
            </Link>
          </div>
          <button type="submit" className="signup-btn" onClick={handleSignUp}>
            Sign Up
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
