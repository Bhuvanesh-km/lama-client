import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import axios from "axios";
import URL from "../../urlConfig";
import { Link } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthenticatedUser } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(URL.LOGIN_URL, {
        email,
        password,
      });
      console.log(response.data.user);
      setAuthenticatedUser(response.data.user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-item">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="login-item">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
