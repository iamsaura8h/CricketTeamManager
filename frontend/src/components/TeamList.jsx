import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true); // Added a loading state

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/teams/names`);
        setTeams(response.data.teams); 
      } catch (error) {
        console.error('❌ Error fetching teams:', error);
      } finally {
        setLoading(false); // Stop loading regardless of success/failure
      }
    };

    fetchTeams();
  }, []);

  if (loading) return <p>Loading teams...</p>; // Show loading state

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Team List</h2>
      {teams.length > 0 ? (
        <ul>
          {teams.map((team, index) => (
            <li key={index} className="py-2">
              {team.teamName}
            </li>
          ))}
        </ul>
      ) : (
        <p>No teams available</p>
      )}
    </div>
  );
}

export default TeamList;
