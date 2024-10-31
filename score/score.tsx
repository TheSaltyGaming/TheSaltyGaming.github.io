import React, { useState } from 'react';

const buttonStyle = {
    padding: '8px 12px',
    margin: '0 4px',
    fontSize: '16px',
    cursor: 'pointer',
};

const inputStyle = {
    fontSize: '18px',
    padding: '4px',
    margin: '4px',
    width: '120px',
};

export default function MobileVolleyballScoreboard() {
    const [team1Score, setTeam1Score] = useState(0);
    const [team2Score, setTeam2Score] = useState(0);
    const [team1Name, setTeam1Name] = useState('Team 1');
    const [team2Name, setTeam2Name] = useState('Team 2');

    const incrementScore = (team: 'team1' | 'team2') => {
        if (team === 'team1') {
            setTeam1Score(prevScore => prevScore + 1);
        } else {
            setTeam2Score(prevScore => prevScore + 1);
        }
    };

    const decrementScore = (team: 'team1' | 'team2') => {
        if (team === 'team1') {
            setTeam1Score(prevScore => Math.max(0, prevScore - 1));
        } else {
            setTeam2Score(prevScore => Math.max(0, prevScore - 1));
        }
    };

    const resetScores = () => {
        setTeam1Score(0);
        setTeam2Score(0);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            backgroundColor: '#f0f0f0',
        }}>
            <div style={{
                display: 'flex',
                flex: 1,
            }}>
                <div style={{
                    width: '50%',
                    backgroundColor: '#e6f3ff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                }}>
                    <input
                        type="text"
                        value={team1Name}
                        onChange={(e) => setTeam1Name(e.target.value)}
                        style={inputStyle}
                    />
                    <div style={{
                        fontSize: '120px',
                        fontWeight: 'bold',
                        color: '#0066cc',
                        marginBottom: '20px',
                    }}>
                        {team1Score}
                    </div>
                    <div>
                        <button onClick={() => incrementScore('team1')} style={buttonStyle}>+1</button>
                        <button onClick={() => decrementScore('team1')} style={buttonStyle}>-1</button>
                    </div>
                </div>
                <div style={{
                    width: '50%',
                    backgroundColor: '#ffe6e6',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                }}>
                    <input
                        type="text"
                        value={team2Name}
                        onChange={(e) => setTeam2Name(e.target.value)}
                        style={inputStyle}
                    />
                    <div style={{
                        fontSize: '120px',
                        fontWeight: 'bold',
                        color: '#cc0000',
                        marginBottom: '20px',
                    }}>
                        {team2Score}
                    </div>
                    <div>
                        <button onClick={() => incrementScore('team2')} style={buttonStyle}>+1</button>
                        <button onClick={() => decrementScore('team2')} style={buttonStyle}>-1</button>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10px',
            }}>
                <button onClick={resetScores} style={{
                    ...buttonStyle,
                    backgroundColor: '#f0f0f0',
                    border: '1px solid #ccc',
                }}>
                    Reset Scores
                </button>
            </div>
        </div>
    );
}