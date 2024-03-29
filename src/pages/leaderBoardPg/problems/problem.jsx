import React from "react";
import { Link } from "react-router-dom";

const Problem = ({ problem, bgClass }) => {
    return (
        <div className={`problem-container ${bgClass}`}>
            <div className="title"><p>{problem.id}. {problem.name}</p></div>
            <div className="acceptance"><p>{problem.score}</p></div>
        </div>
    );
};

export default Problem;
