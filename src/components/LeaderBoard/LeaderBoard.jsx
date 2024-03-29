import React from "react";
import './LeaderBoard.css';
import LeaderboardEntry from '../../components/LeaderBoardEntry/LeaderBoardEntry';

const Leaderboard = ({ data }) => {
    return (
      <div>
        <h1 id="leaderboard-txt">Leaderboard</h1>
        <div>
          {data.map(entry => (
            <LeaderboardEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    );
  };

  export default Leaderboard;