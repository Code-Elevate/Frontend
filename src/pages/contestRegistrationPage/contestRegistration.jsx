import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import astronaut from './assets/astronaut_.jpg';
import badge from './assets/badge.png';
import './contestRegistration.css';
import axios from 'axios';
import toast from "react-hot-toast";

const ContestRegistration = () => {
  const navigate = useNavigate();
  const { contestId } = useParams(); 
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [participants, setParticipants] = useState([]);
  const [showFields, setShowFields] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [maxTeamSize, setMaxTeamSize] = useState(0); // State to store the max team size

  useEffect(() => {
    // Fetch contest details and set the max team size
    const fetchContestDetails = async () => {
      try {
        const response = await axios.get(`https://code-elevate.onrender.com/api/contests/${contestId}`);
        const contestDetails = response.data;
        setMaxTeamSize(contestDetails.maxTeamSize);
      } catch (error) {
        console.error('Error fetching contest details:', error);
      }
    };

    fetchContestDetails();
  }, [contestId]);

  const registerContest = async () => {
    try {
      const data = {
        name: teamName,
        members: participants.map(participant => participant.email),
      };

      const authToken = localStorage.getItem("x-auth-token");
      if (!authToken) {
        toast.error("Please login to continue");
        navigate("/signup");
        return;
      }

      const config = {
        method: 'post',
        url: `https://code-elevate.onrender.com/api/contests/${contestId}/register`,
        headers: { 
          'x-auth-token': authToken,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      };
  
      const response = await axios(config);
      if (response.status === 200) {
        setRegistrationSuccess(true);
        navigate("/problems");
      }
  
      console.log(response.data);
      
    } catch (error) {
      console.error('Error registering for contest:', error);
    }
  };

  const handleAddParticipant = () => {
    if (participants.length < maxTeamSize - 1 && email) {
      setParticipants([...participants, { email }]);
      setEmail('');
      if (participants.length === maxTeamSize - 2) {
        setShowFields(false);
      }
    }
  };

  const handleDeleteParticipant = (index) => {
    const updatedParticipants = [...participants];
    updatedParticipants.splice(index, 1);
    setParticipants(updatedParticipants);
  };

  return (
    <div className='contestRegistrationPage'>
      
      <div className='form-design'>
        <div className='images'>
        <div className='title'>
        <h1>Register for Contest</h1>
      </div>

          {/* <div className='badge-img'>
            <img src={badge} alt="Badge" />
          </div> */}
        </div>

        <div className="form-container">
          <form>
            <div>
              <input className='team-name' type="text" placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
            </div>

            {showFields && (
              <div>
                <input className='email' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            )}

            <div className='add-member-button'>
              {!showFields && (
                <button type="button" onClick={() => setShowFields(true)}>Add Member</button>
              )}
            </div>

            <div>
              {showFields && (
                <button type="button" onClick={() => handleAddParticipant()}>Add Participant</button>
              )}
            </div>

            {participants.length >= maxTeamSize - 1 && (
              <p>Maximum team size reached. You can no longer add more participants.</p>
            )}

            <div className='participants-list'>
              <h2>Participants:</h2>
              <ul>
                {participants.map((participant, index) => (
                  <li key={index}>
                    {participant.email}
                    <button type="button" onClick={() => handleDeleteParticipant(index)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>

            {participants.length > 0 && (
              <div>
                <button type="button" onClick={() => registerContest()}>Register</button>
              </div>
            )}

            {registrationSuccess && <p>Registration successful!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContestRegistration;
