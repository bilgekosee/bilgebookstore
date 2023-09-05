import React, { useRef } from "react";
import "./Auth.css";
import password__icon from "./password.png";
import username__icon from "./username.png";
import Books from "../components/Books";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const localLogin = localStorage.getItem("login");
  const localPassword = localStorage.getItem("password");
  const localUsername = localStorage.getItem("username");

  const handleLogin = () => {
    if (
      username.current.value === localUsername &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("login", "true");
      window.location.href = "/";
    } else {
      alert("Enter valid");
      window.location.reload();
    }
  };

  return (
    <div>
      {localLogin ? (
        <Books />
      ) : (
        <div className="auth_container">
          <div className="auth_header">
            <div className="auth_text">Login</div>
            <div className="auth_underline"></div>
          </div>
          <div className="auth_inputs">
            <div className="auth_input">
              <img src={username__icon} alt="" />
              <input type="text" placeholder="Username" ref={username} />
            </div>
            <div className="auth_input">
              <img src={password__icon} alt="" />
              <input type="password" placeholder="Password" ref={password} />
            </div>
          </div>
          <div className="auth-submit-container">
            <button onClick={handleLogin}>
              <div className="auth_submit">Login</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
