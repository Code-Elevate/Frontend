import React, { useState } from "react";
import "./signup.css";
import logo from "../../assets/logo.png";
import signUpbg from "../../assets/signup-bg.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://code-elevate.onrender.com/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error || "Failed to register user");
      }
    } catch (error) {
      setMessage("An error occurred while registering user");
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="page-container">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-text">CodeElevate</h1>
        </div>
      </div>
      <div className="card-container">
        <div className="signup-form-container">
          <h2>Sign Up!</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <button id="btn-signin" type="submit">
              Sign Up
            </button>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>
      <div className="image-container">
        <img src={signUpbg} alt="Logo" />
      </div>
    </div>
  );
};

export default SignUp;
