import React, { useState } from 'react';
import './profilePage.css';
import profilePhoto from './assets/profile_img.png';
import ranksImage from './assets/ranks.png';

const ProfilePage = () => {
    const ranksData = [
        { rank: 1, contestName: 'abc', score: 1000 },
        { rank: 2, contestName: 'xyz', score: 950 },
        { rank: 3, contestName: 'pqr', score: 900 },
        { rank: 1, contestName: 'abc', score: 1000 },
        { rank: 2, contestName: 'xyz', score: 950 },
        { rank: 3, contestName: 'pqr', score: 900 },
        { rank: 1, contestName: 'abc', score: 1000 },
        { rank: 2, contestName: 'xyz', score: 950 },
        { rank: 3, contestName: 'pqr', score: 900 },
        { rank: 1, contestName: 'abc', score: 1000 },
        { rank: 2, contestName: 'xyz', score: 950 },
        { rank: 3, contestName: 'pqr', score: 900 },
        { rank: 1, contestName: 'abc', score: 1000 },
        { rank: 2, contestName: 'xyz', score: 950 },
        { rank: 3, contestName: 'pqr', score: 900 },
        { rank: 1, contestName: 'abc', score: 1000 },
        { rank: 2, contestName: 'xyz', score: 950 },
        { rank: 3, contestName: 'pqr', score: 900 },
    ];

    const [name, setName] = useState('John Doe');
    const [username, setUsername] = useState('john_doe');
    const [rank, setRank] = useState('Beginner');
    const [skills, setSkills] = useState('Python, C++, Java');
    const [showRanks, setShowRanks] = useState(false);

    

    return (
        <div className='profile-page'>
            <div className="profile-header">
                <h1>Profile</h1>
            </div>
            <div className="container">
                <div className="profile-info">
                    <div className="profile-details">
                        <div className='profile-img'>
                            <img src={profilePhoto} alt="Profile Photo" />
                        </div>
                        <h3>Name: {name}</h3>
                        <h3>Username: {username}</h3>
                        <h3>Rank: {rank}</h3>
                        <h3>Skills: {skills}</h3>
                    </div>
                    <div className='createProfileButton'>
                        <button>Create Profile</button>
                    </div>
                </div>
                <div className="ranks">
                    {/* <div className='ranks-img' onClick={handleConfettiClick}>
                        <img src={ranksImage} alt="Ranks" />
                    </div> */}
                    <div className='ranks-header'>
                    <h4 >Ranks in Previous Contests</h4>
                    </div>
                    
                    <div className="ranks-container">
                        {ranksData.map((data, index) => (
                            <div key={index} className={`rank-item-wrapper ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                <div className="rank-item">
                                    <span>Rank: {data.rank}</span>
                                    <span>Contest: {data.contestName}</span>
                                    <span>Score: {data.score}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
