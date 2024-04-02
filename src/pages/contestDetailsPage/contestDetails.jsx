import React, { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";

const ContestDetailsPage = () => {
  const { contestId } = useParams(); // Extracting the contestId from the URL params
  const [contestDetails, setContestDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContestDetails = async () => {
      try {
        const response = await axios.get(
          `https://code-elevate.onrender.com/api/contests/${contestId}`
        ); // Use the contestId from the URL to fetch specific contest details
        setContestDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchContestDetails();
  }, [contestId]); // Re-run effect whenever contestId changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {contestDetails && (
        <div className="contest-details">
          <h2>{contestDetails.title}</h2>
          <p>Description: {contestDetails.description}</p>
          <p>Status: {contestDetails.status}</p>
          <p>Start Time: {contestDetails.startTime}</p>
          <p>End Time: {contestDetails.endTime}</p>
          <p>Max Team Size: {contestDetails.maxTeamSize}</p>
          <p>Duration: {contestDetails.duration}</p>
          <p>Organizers: {contestDetails.organizers.join(", ")}</p>
          <p>
            Penalty: {contestDetails.penalty.isOn ? "Enabled" : "Disabled"} (
            {contestDetails.penalty.value} points)
          </p>
          <div className="register-button">
            <Link to={`/contestRegistration/${contestDetails.id}`}>
            <button>Register</button>
            </Link>
          </div>
          <h3>Problems:</h3>
          <ul>
            {contestDetails.problems.map((problem) => (
              <li key={problem.id}>
                {problem.title} - Difficulty: {problem.difficulty}
              </li>
            ))}
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default ContestDetailsPage;
