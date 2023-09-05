import React from "react";
import "./Auth.css";
import password__icon from "./password.png";
import username__icon from "./username.png";
import email__icon from "./email.png";
import {
  emailValidator,
  passwordValidator,
  usernameValidator,
} from "./regexValidator";

const Register = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [input, setInput] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const handleClick = () => {
    if (!emailValidator(input.email))
      return setErrorMessage("Please enter valid email");

    if (!usernameValidator(input.username))
      return setErrorMessage(
        "Username should have minimum 8 character with the combination of uppercase, lowercase, numbers"
      );

    if (!passwordValidator(input.password))
      return setErrorMessage(
        "Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters"
      );

    localStorage.setItem("username", input.username);
    localStorage.setItem("password", input.password);
    localStorage.setItem("email", input.email);
    localStorage.setItem("signUp", "true");
    alert("Account created");
    window.location.href = "/login";
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="auth_container">
        <div className="auth_header">
          <div className="auth_text">Sign Up</div>
          <div className="auth_underline"></div>
        </div>
        {errorMessage.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
              color: "red",
              fontWeight: 900,
              fontSize: "16px",
              fontFamily: "sans-serif",
              marginTop: "-18px",
            }}
          >
            {errorMessage}
          </div>
        )}
        <div className="auth_inputs">
          <div className="auth_input">
            <img src={email__icon} alt="" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="auth_input">
            <img src={username__icon} alt="" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={handleChange}
            />
          </div>
          <div className="auth_input">
            <img src={password__icon} alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="auth-submit-container">
          <button onClick={handleClick}>
            <div className="auth_submit">SignUp</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
