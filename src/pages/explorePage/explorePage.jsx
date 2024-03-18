
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import coder from "./assets/coder-removebg-preview.png";

import Navbar from "../../components/navbar/navbar";
import "./explorePage.css";
import hostcontest from "./assets/ldrbrd2.png";
import collaborativecoding from "./assets/collab-coder-nobg.png";
import languageflex from "./assets/lang-flex-img.png";


const ExplorePage = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <div id="explorePage">
      <Navbar />
      <table>
        <tr >
        <div id="explore-hero">
        <h3>Welcome</h3>
        {/* <h1>
          <img src={leetLogo} className="leet-logo" />
        </h1> */}
        <h2>A New Way to Learn</h2>
        <span id="home-text">
          Enhance your skills with us
          
          and bag those technical interviews.
        </span>
        <br />
        <Link to={"/signup"}>
          <button id="home-btn">Get Started</button>
        </Link>
      </div>
      <div>
        <img src={coder} className="coder-img" />
    
        
        {/* <img src={roboImg} className="home-robo" /> */}
      </div>
      </tr>

      
        <tr class = "card1">

          
          <td >
            <div>
              <img src={hostcontest} className="host-contest-img"/>
            </div>
          </td>
          <td >
            <div id = "Host-contest-txt">
              Host Weekly Contests
              <br/>
            <div id = "host-contest-para">
            <p >
            Embrace the opportunity to showcase your skills,
            <br/>
            compete with fellow enthusiasts, and elevate your coding prowess.
              </p>
              
              <button id="host-contest-btn">Explore</button>
            </div>
            
            </div>
            
            
          </td>

        </tr>
        <tr class = "card2">
          <td >

            <div id ="collaborative-coding-txt">
              Collaborate Coding Sessions

            </div>
            <br/>
            <div id ="collaborative-coding-para">
              <p>
              Join hands with like-minded individuals, brainstorming solutions, refining algorithms, and conquering challenges together. 
              </p>
              <button id="collaborative-coding-btn">Explore</button>
            </div>

          </td>
          <td >
            <div>
            <img src={collaborativecoding} className="collaborative-coding-img"/>
            </div>
            
          </td>
        </tr>
        <tr class = "card3">

          
          <td >
            <div>
              <img src={languageflex} className="lang-flex-img"/>
            </div>
          </td>
          <td >
            <div id = "lang-flex-txt">
              Language Flexibility
              <br/>
            <div id = "lang-flex-para">
            <p >
            Dive into a world of coding freedom with our platform's support for a diverse range 
            
             of programming languages.
              </p>
            </div>
            
            </div>
            
            
          </td>

        </tr>


      </table>
      <div id="upcoming-contest-container">
      <text id="upcoming-contest">Upcoming Contest</text>
      </div>
      <div className="flex-container">
      
      <div className="flex-item-left">Container 1</div>
      <div className="flex-item-mid">Container 2</div>
      <div className="flex-item-right">Container 3</div>
      </div>
      
      
    </div>
  );
};



export default ExplorePage;
