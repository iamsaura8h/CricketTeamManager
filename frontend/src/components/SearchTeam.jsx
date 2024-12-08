import React, { useState } from 'react';
import axios from 'axios';

function SearchTeam() {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const [teams, setTeams] = useState([]); // State to store teams
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(''); // State for errors

  // Fetch teams based on search query
  const fetchTeams = async () => {
    if (!searchQuery) return; // Do nothing if search query is empty

    setLoading(true);
    setError(''); // Clear any previous errors

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/teams/search?query=${searchQuery}`
      );
      setTeams(response.data.teams);
    } catch (error) {
      console.error('Error searching teams:', error);
      setError('Error fetching teams');
    } finally {
      setLoading(false);
    }
  };

  // Handle input change and trigger the search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Teams</h2>

      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        className="p-2 border rounded-md"
        placeholder="Search by team name..."
      />

      {/* Search Button */}
      <button
        onClick={fetchTeams}
        className="ml-2 p-2 bg-blue-500 text-white rounded-md"
      >
        Search
      </button>

      {/* Display Loading Indicator */}
      {loading && <p>Loading teams...</p>}

      {/* Display Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display Search Results */}
      {searchQuery && !loading && teams.length === 0 && <p>No teams found</p>}
      
      {teams.length > 0 && !loading && (
        <ul className="mt-4">
          {teams.map((team) => (
            <li key={team._id} className="py-2">
              {/* Display only team name */}
              {team.teamName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchTeam;
