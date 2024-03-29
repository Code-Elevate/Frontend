import React from "react";
import './LeaderBoardEntry.css';


const LeaderboardEntry = ({ entry }) => {
    return (
      
      <tr className="leader-entry">
      
      <td>{entry.name}</td>
      <td>{entry.score}</td>
    </tr>
    );
  };
  
  export default LeaderboardEntry;