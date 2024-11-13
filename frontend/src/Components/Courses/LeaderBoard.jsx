import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get('http://localhost:8000/quiz/leaderboard');
                setLeaderboard(response.data);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div>
            <h2>Leaderboard</h2>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>User Name</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.userDetails.name}</td>
                            <td>{user.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
