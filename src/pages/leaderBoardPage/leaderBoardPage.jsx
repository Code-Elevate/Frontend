
import './leaderBoardPage.css';

import React, { useState, useEffect } from 'react';
import Leaderboard from '../../components/LeaderBoard/LeaderBoard';
import leaderboardData from '../../leaderboardData.json';


const LeaderboardPage = () => {
    const [data, setData] = useState(leaderboardData);
    const [playerid, setPlayerId] = useState('');
    const [Name, setContestName] = useState('');
    const [score, setContestScore] = useState('');

    const addNewData = () => {
        
        const newData = [...data, { id: playerid, name: Name, score: score }];
        
        setData(newData);
      };
    
      
      useEffect(() => {
        
        addNewData();
      }, []);
  
    return (
      <div>
        <Leaderboard data={data} />
      </div>
    );
  };
  
  export default LeaderboardPage;
