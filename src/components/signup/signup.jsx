import React, { useEffect, useState } from "react";
import "./signup.css"; // Make sure to import your CSS file
import logo from "../../assets/logo.png"; // Import your image file
import { Link } from "react-router-dom";
import signUpbg from "../../assets/signup-bg.png";


const SignUp = () => {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const text = "Sign Up!";
    let index = 0;

    const timer = setInterval(() => {
      setAnimatedText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);
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
          <form className="signup-form">
            <input type="text" placeholder="Name" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <Link to={"/"}>
              <button id="btn-signin" type="submit">
                Sign Up
              </button>
            </Link>
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
