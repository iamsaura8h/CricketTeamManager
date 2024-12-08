import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [teamDetails, setTeamDetails] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/teams/names`);
        setTeams(response.data.teams);
      } catch (error) {
        console.error('❌ Error fetching teams:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const handleTeamClick = async (teamId) => {
    if (teamId === selectedTeamId) {
      // If the selected team is clicked again, collapse the details
      setSelectedTeamId(null);
      setTeamDetails(null);
      return;
    }

    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/teams/${teamId}`);
      setTeamDetails(response.data);
      setSelectedTeamId(teamId);
    } catch (error) {
      console.error('❌ Error fetching team details:', error);
    }
  };

  if (loading) return <p>Loading teams...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Team List</h2>
      {teams.length > 0 ? (
        <ul>
          {teams.map((team, index) => (
            <li key={index} className="py-2">
              <button
                onClick={() => handleTeamClick(team._id)}
                className="text-blue-500 hover:underline"
              >
                {team.teamName}
              </button>
              {/* Conditionally display the team details */}
              {selectedTeamId === team._id && teamDetails && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                  <h3 className="text-xl font-bold">Players</h3>
                  {teamDetails.players.length > 0 ? (
                    <table className="min-w-full table-auto mt-2">
                      <thead>
                        <tr>
                          <th className="border p-2">Player Name</th>
                          <th className="border p-2">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamDetails.players.map((player, idx) => (
                          <tr key={idx}>
                            <td className="border p-2">{player.name}</td>
                            <td className="border p-2">{player.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No players available for this team.</p>
                  )}
                </div>
              )}
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
