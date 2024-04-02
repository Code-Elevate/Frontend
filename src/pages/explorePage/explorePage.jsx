import React, { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coder from "./assets/coder-removebg-preview.png";
import axios from 'axios';
import Navbar from "../../components/navbar/navbar";
import "./explorePage.css";
import hostcontest from "./assets/ldrbrd2.png";
import collaborativecoding from "./assets/collab-coder-nobg.png";
import languageflex from "./assets/lang-flex-img.png";
import upcomingContestRight from "./assets/right.png";
import upcomingContestLeft from "./assets/left.png";
import upcomingContestMid from "./assets/mid.png";

const ExplorePage = () => {
  const [upcomingContests, setUpcomingContests] = useState([]);
  const [runningContests, setRunningContests] = useState([]);
  const [pastContentests, setPastContests] = useState([]);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  // Data for upcoming contests
 

  useEffect(() => {
    const fetchUpcomingContests = async () => {
      try {
        const response = await axios.get('https://code-elevate.onrender.com/api/contests');
        setUpcomingContests(response.data.upcoming);
      } catch (error) {
        console.error('Error fetching upcoming contests:', error);
      }
    };

    fetchUpcomingContests();
  }, []);

  useEffect(() => {
    const fetchRunningContests = async () => {
      try {
        const response = await axios.get('https://code-elevate.onrender.com/api/contests');
        setRunningContests(response.data.running);
      } catch (error) {
        console.error('Error fetching upcoming contests:', error);
      }
    };

    fetchRunningContests();
  }, []);
  useEffect(() => {
    const fetchPastContests = async () => {
      try {
        const response = await axios.get('https://code-elevate.onrender.com/api/contests');
        setPastContests(response.data.past);
      } catch (error) {
        console.error('Error fetching upcoming contests:', error);
      }
    };

    fetchPastContests();
  }, []);
  

  

  const scrollLeft = () => {
    sliderRef.current.slickPrev();
  };

  const scrollRight = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div id="explorePage">
      <Navbar />
      <div>
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

          <tr>
            <div id="upcoming-contest">
              Upcoming Contest
            </div>
            <div className="upcoming-contest-wrapper">
              <table id="upcoming-contest-table">
                <thead>
                  <tr>
                    <th>Contest ID</th>
                    <th>Contest Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    
                    <th>Start Time</th>
                    <th>End Time</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingContests.map((contest) => (
                    <tr key={contest.id}>
                      <td>
                        <Link to={`/contestDetails/${contest.id}`}>
                          {contest.id}
                        </Link>
                      </td>
                      <td>{contest.name}</td>
                      <td>{contest.description}</td>
                      <td>{contest.duration}</td>
                      
                      <td>{contest.startTime}</td>
                      <td>{contest.endTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </tr>
          <tr>
            <div id="upcoming-contest">
              Running Contest
            </div>
            <div className="upcoming-contest-wrapper">
              <table id="upcoming-contest-table">
                <thead>
                  <tr>
                    <th>Contest ID</th>
                    <th>Contest Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    
                    <th>Start Time</th>
                    <th>End Time</th>
                  </tr>
                </thead>
                <tbody>
                  {runningContests.map((contest) => (
                    <tr key={contest.id}>
                      <td>
                        <Link to={`/contestDetails/${contest.id}`}>
                          {contest.id}
                        </Link>
                      </td>
                      <td>{contest.name}</td>
                      <td>{contest.description}</td>
                      <td>{contest.duration}</td>
                      
                      <td>{contest.startTime}</td>
                      <td>{contest.endTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </tr>
          <tr>
            <div id="upcoming-contest">
              Past Contest
            </div>
            <div className="upcoming-contest-wrapper">
              <table id="upcoming-contest-table">
                <thead>
                  <tr>
                    <th>Contest ID</th>
                    <th>Contest Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    
                    <th>Start Time</th>
                    <th>End Time</th>
                  </tr>
                </thead>
                <tbody>
                  {pastContentests.map((contest) => (
                    <tr key={contest.id}>
                      <td>
                        <Link to={`/contestDetails/${contest.id}`}>
                          {contest.id}
                        </Link>
                      </td>
                      <td>{contest.name}</td>
                      <td>{contest.description}</td>
                      <td>{contest.duration}</td>
                      
                      <td>{contest.startTime}</td>
                      <td>{contest.endTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </tr>
          <tr class="card1">
            <td>
              <div>
                <img src={hostcontest} className="host-contest-img" />
              </div>
            </td>
            <td>
              <div id="Host-contest-txt">
                Host Weekly Contests
                <br />
                <div id="host-contest-para">
                  <p>
                    Embrace the opportunity to showcase your skills,
                    <br />
                    compete with fellow enthusiasts, and elevate your coding
                    prowess.
                  </p>
                  <Link to={"/ContestHosting"}>
                    <button id="host-contest-btn">Explore</button>
                  </Link>
                </div>
              </div>
            </td>
          </tr>
          <tr class="card2">
            <td>
              <div id="collaborative-coding-txt">
                Collaborate Coding Sessions
              </div>
              <br />
              <div id="collaborative-coding-para">
                <p>
                  Join hands with like-minded individuals, brainstorming
                  solutions, refining algorithms, and conquering challenges
                  together.
                </p>
                <button id="collaborative-coding-btn">Explore</button>
              </div>
            </td>
            <td>
              <div>
                <img
                  src={collaborativecoding}
                  className="collaborative-coding-img"
                />
              </div>
            </td>
          </tr>
          <tr class="card3">
            <td>
              <div>
                <img src={languageflex} className="lang-flex-img" />
              </div>
            </td>
            <td>
              <div id="lang-flex-txt">
                Language Flexibility
                <br />
                <div id="lang-flex-para">
                  <p>
                    Dive into a world of coding freedom with our platform's
                    support for a diverse range of programming languages.
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div className="carousel-container">
        <Slider ref={sliderRef} {...settings}>
          <div className="flex-item">
            <img src={upcomingContestLeft} id="img-left" alt="Left" />
            Container 1
          </div>
          <div className="flex-item">
            <img src={upcomingContestMid} id="img-mid" alt="Mid" />
            Container 2
          </div>
          <div className="flex-item">
            <img src={upcomingContestRight} id="img-right" alt="Right" />
            Container 3
          </div>
          {/* Add more items here */}
        </Slider>
      </div>
    </div>
  );
};

export default ExplorePage;
