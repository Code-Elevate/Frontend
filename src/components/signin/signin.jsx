import React, { useState } from "react";
import "./signin.css";
import logo from "../../assets/logo.png";
import { Link,useNavigate } from "react-router-dom";
import signUpbg from "../../assets/signup-bg.png";
import { toast } from "react-hot-toast";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://code-elevate.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      const authToken = response.headers.get("x-auth-token");
      

    if (response.status === 200 && authToken) {
      localStorage.setItem("x-auth-token", authToken);
      
      toast.success("Login successful!");
      navigate("/");
      return;
    }

      if (response.ok) {
        
        console.log("User logged in:", data);
        setMessage("User logged in successfully!");
      } else {
        setMessage(data.message || "Failed to sign in");
      }
    } catch (error) {
      setMessage("An error occurred while signing in");
      console.error("Error signing in:", error);
    }
    

    toast.error(data.message);
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
        <div className="signin-form-container">
          <h2>Sign In!</h2>
          <form className="signin-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <div className="forgot-password">
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </Link>
            </div>
            <div className="create-account">
              <Link to="/signup" className="create-account-link">
                Create Account
              </Link>
            </div>
            <button id="btn-signin" type="submit">
              Sign In
            </button>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>
      <div className="image-container">
        <img src={signUpbg} alt="Background" />
      </div>
    </div>
  );
};

export default SignIn;
