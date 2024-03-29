import React, { useState } from 'react';
import './ContestHosting.css';

const ContestHosting = () => {
    const [contestName, setContestName] = useState('');
    const [problemTitle, setProblemTitle] = useState('');
    const [problemStatement, setProblemStatement] = useState('');
    const [problemInput, setProblemInput] = useState('');
    const [problemOutput, setProblemOutput] = useState('');
    const [problemConstraints, setProblemConstraints] = useState('');
    const [problems, setProblems] = useState([]);

    const handleAddProblem = () => {
        if (!problemTitle || !problemStatement || !problemInput || !problemOutput || !problemConstraints) return;
        setProblems([...problems, { 
            title: problemTitle, 
            statement: problemStatement,
            input: problemInput,
            output: problemOutput,
            constraints: problemConstraints
        }]);
        setProblemTitle('');
        setProblemStatement('');
        setProblemInput('');
        setProblemOutput('');
        setProblemConstraints('');
    };

    const handleEditProblem = (index) => {
        const editedTitle = prompt('Enter new problem title:');
        const editedStatement = prompt('Enter new problem statement:');
        const editedInput = prompt('Enter new problem input:');
        const editedOutput = prompt('Enter new problem output:');
        const editedConstraints = prompt('Enter new problem constraints:');
        if (editedTitle && editedStatement && editedInput && editedOutput && editedConstraints) {
            const updatedProblems = [...problems];
            updatedProblems[index] = { 
                title: editedTitle, 
                statement: editedStatement,
                input: editedInput,
                output: editedOutput,
                constraints: editedConstraints
            };
            setProblems(updatedProblems);
        }
    };

    const handleDeleteProblem = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this problem?');
        if (confirmDelete) {
            const updatedProblems = [...problems];
            updatedProblems.splice(index, 1);
            setProblems(updatedProblems);
        }
    };

    return (
        <div className="contest-hosting">
            <div className="date-container">
                {new Date().toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </div>
            <h1>Host Contest</h1>
            <div className="input-section">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter Contest Name"
                        value={contestName}
                        onChange={(e) => setContestName(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Enter problem title"
                        value={problemTitle}
                        onChange={(e) => setProblemTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter problem statement"
                        value={problemStatement}
                        onChange={(e) => setProblemStatement(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter problem input"
                        value={problemInput}
                        onChange={(e) => setProblemInput(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter problem output"
                        value={problemOutput}
                        onChange={(e) => setProblemOutput(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter problem constraints"
                        value={problemConstraints}
                        onChange={(e) => setProblemConstraints(e.target.value)}
                    />
                    <button onClick={handleAddProblem}>Add Problem</button>
                </div>
            </div>
            <div className="problem-list">
                <h2>Problem List:</h2>
                <ul>
                    {problems.map((problem, index) => (
                        <li key={index}>
                            <div className="problem-details">
                                <text>Problem Title: {problem.title}</text>
                                <br />
                                <text>Problem Statement: {problem.statement}</text>
                                <br />
                                <text>Input: {problem.input}</text>
                                <br />
                                <text>Output: {problem.output}</text>
                                <br />
                                <text>Constraints: {problem.constraints}</text>
                            </div>
                            <div className="problem-actions">
                                <button onClick={() => handleEditProblem(index)}>Edit</button>
                                <button onClick={() => handleDeleteProblem(index)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContestHosting;