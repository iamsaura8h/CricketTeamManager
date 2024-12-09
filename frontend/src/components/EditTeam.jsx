import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EditTeam() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/teams/names`);
        setTeams(response.data.teams);
      } catch (error) {
        setError('Failed to load teams');
      }
    };
    fetchTeams();
  }, []);

  const handleTeamSelect = async (teamId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/teams/${teamId}`);
      setSelectedTeam(response.data);
      setError('');
    } catch (error) {
      setError('Could not fetch team details');
    }
  };

  const handleUpdateTeam = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/teams/${selectedTeam._id}`, selectedTeam);
      setSuccess('Team updated successfully');
      setTimeout(() => {
        setSuccess('');
        setSelectedTeam(null);
      }, 2000);
    } catch (error) {
      setError('Update failed');
    }
  };

  const addPlayer = () => {
    setSelectedTeam({
      ...selectedTeam,
      players: [...selectedTeam.players, { name: '', role: '' }]
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Team</h2>
      
      {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">{success}</div>}
      
      <div className="grid md:grid-cols-2 gap-4">
        {/* Team List */}
        <div>
          <h3 className="font-semibold mb-2">Select Team</h3>
          {teams.map(team => (
            <button 
              key={team._id} 
              onClick={() => handleTeamSelect(team._id)}
              className="w-full text-left p-2 hover:bg-gray-100 border mb-1 rounded"
            >
              {team.teamName}
            </button>
          ))}
        </div>

        {/* Team Edit Form */}
        {selectedTeam && (
          <form onSubmit={handleUpdateTeam} className="bg-gray-50 p-4 rounded">
            <div className="mb-4">
              <label className="block mb-2">Team Name</label>
              <input
                type="text"
                value={selectedTeam.teamName}
                onChange={(e) => setSelectedTeam({...selectedTeam, teamName: e.target.value})}
                className="w-full p-2 border rounded"
                placeholder="Team Name"
              />
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">Players</h4>
                <button 
                  type="button"
                  onClick={addPlayer}
                  className="bg-green-500 text-white px-2 py-1 rounded text-sm"
                >
                  + Add Player
                </button>
              </div>

              {selectedTeam.players.map((player, index) => (
                <div key={index} className="flex mb-2 space-x-2">
                  <input
                    type="text"
                    value={player.name}
                    onChange={(e) => {
                      const updatedPlayers = [...selectedTeam.players];
                      updatedPlayers[index] = {...player, name: e.target.value};
                      setSelectedTeam({...selectedTeam, players: updatedPlayers});
                    }}
                    className="w-1/2 p-2 border rounded"
                    placeholder="Player Name"
                  />
                  <input
                    type="text"
                    value={player.role}
                    onChange={(e) => {
                      const updatedPlayers = [...selectedTeam.players];
                      updatedPlayers[index] = {...player, role: e.target.value};
                      setSelectedTeam({...selectedTeam, players: updatedPlayers});
                    }}
                    className="w-1/2 p-2 border rounded"
                    placeholder="Player Role"
                  />
                </div>
              ))}
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default EditTeam;