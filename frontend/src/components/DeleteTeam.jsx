import React, { useState } from 'react';
import axios from 'axios';

function DeleteTeam() {
  const [teamName, setTeamName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!teamName) {
      setErrorMessage('Please enter a team name.');
      return;
    }

    try {
      const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/teams/${teamName}`);
      setSuccessMessage(response.data.message);
      setTeamName('');  // Clear the input field after successful delete
      setErrorMessage('');  // Clear error message
    } catch (error) {
      setErrorMessage('Failed to delete team. Team not found or error occurred.');
      console.error(error);
    }
  };

  return (
    <div className="delete-team-form max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Delete a Team</h2>
      
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      <form onSubmit={handleDelete}>
        <div className="mb-4">
          <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Enter Team Name:</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={handleChange}
            required
            placeholder="Enter team name"
            className="p-2 w-full border rounded-md"
          />
        </div>

        <button type="submit" className="w-full px-4 py-2 bg-red-500 text-white rounded-md">
          Delete Team
        </button>
      </form>
    </div>
  );
}

export default DeleteTeam;
