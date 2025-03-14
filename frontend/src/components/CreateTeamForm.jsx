import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests

function CreateTeamForm() {
  const [teamName, setTeamName] = useState('');
  const [players, setPlayers] = useState([{ name: '', role: '' }]);
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message

  const handleTeamNameChange = (e) => setTeamName(e.target.value);

  const handlePlayerChange = (index, e) => {
    const updatedPlayers = [...players];
    updatedPlayers[index][e.target.name] = e.target.value;
    setPlayers(updatedPlayers);
  };

  const addPlayer = () => {
    setPlayers([...players, { name: '', role: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const teamData = {
      teamName,
      players,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/teams`, teamData);
      console.log(response.data.message);
      alert('Team created successfully!');
      setTeamName('');
      setPlayers([{ name: '', role: '' }]); // Reset the form after success
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      console.error('Error creating team:', error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message); // Set error message if team name exists
      } else {
        setErrorMessage('Failed to create team!'); // Default error message
      }
    }
  };

  return (
    <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Create a New Cricket Team</h2>

      {/* Error message display */}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      <div className="mb-4">
        <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={handleTeamNameChange}
          required
          className="mt-2 p-2 w-full border rounded-md"
        />
      </div>

      <h3 className="text-lg font-semibold mb-2">Players</h3>
      {players.map((player, index) => (
        <div key={index} className="mb-4">
          <div className="flex space-x-2">
            <input
              type="text"
              name="name"
              value={player.name}
              onChange={(e) => handlePlayerChange(index, e)}
              placeholder="Player Name"
              required
              className="p-2 w-1/2 border rounded-md"
            />
            <input
              type="text"
              name="role"
              value={player.role}
              onChange={(e) => handlePlayerChange(index, e)}
              placeholder="Player Role"
              required
              className="p-2 w-1/2 border rounded-md"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addPlayer}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
      >
        Add Player
      </button>

      <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded-md">
        Create Team
      </button>
    </form>
  );
}

export default CreateTeamForm;
