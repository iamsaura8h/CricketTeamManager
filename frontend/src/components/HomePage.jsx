import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center px-4">
        <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
          Welcome to the Cricket Team Manager! Seamlessly manage cricket teams, create new teams, edit player details, 
          and delete teams — all from a single, user-friendly interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/create-team" className="w-56 p-3 text-center bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition">
            ➕ Create a Team
          </Link>

          <Link to="/display-team" className="w-56 p-3 text-center bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition">
            📋 View All Teams
          </Link>

          <Link to="/search-team" className="w-56 p-3 text-center bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition">
            🔍 Search Teams
          </Link>

          <Link to="/delete-team" className="w-56 p-3 text-center bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition">
            ❌ Delete a Team
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">© 2024 Cricket Team Manager. Built by Saurabh Kumar.</p>
      </footer>
    </div>
  );
};

export default HomePage;