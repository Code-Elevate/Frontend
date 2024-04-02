import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import navLogo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <div id="navbar">
      <ul className="nav-left">
        <li id="navLogo">
          <Link to={"/"} className="nav-link" id="nav-logo-link">
            <img src={navLogo} width="35px" />
            &nbsp; CodeElevate
          </Link>
        </li>
        <li id="navExplore">
          <Link to={"/"} className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} id="explore-link">
            <p>Home</p>
          </Link>
        </li>
        <li id="navProblems">
          <Link to={"/problems"} className={`nav-link ${location.pathname === '/problems' ? 'active' : ''}`} id="problems-link">
            <p>Problems</p>
          </Link>
        </li>
      </ul>
      <ul className="nav-right">
        <li id="navSignin">
          <Link to={"/signin"} className={`nav-link ${location.pathname === '/signin' ? 'active' : ''}`} id="signin-link">
            <p>Log In</p>
          </Link>
        </li>
        <li id="navSignin">
          <Link to={"/signin"} className={`nav-link ${location.pathname === '/username123' ? 'active' : ''}`} id="hostcontest-link">
            <p>username123</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
