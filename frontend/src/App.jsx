import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Header from './components/Header';
import CreateTeamForm from './components/CreateTeamForm';
import TeamList from './components/TeamList';
import SearchTeam from './components/SearchTeam';
import EditTeam from './components/EditTeam';
import DeleteTeam from './components/DeleteTeam';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router> {/* Wrap the app in Router */}
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="flex justify-center items-center py-8">
          <h1 className="text-6xl font-dancing font-bold text-blue-600">Cricket Team Manager</h1>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Route for homepage */}
          <Route path="/create-team" element={<CreateTeamForm />} /> {/* Route for creating teams */}
          <Route path="/display-team" element={<TeamList />} /> {/* Route for displaying teams */}
          <Route path="/search-team" element={<SearchTeam />} /> {/* Route for searching teams */}
          <Route path="/edit-team" element={<EditTeam/>} /> {/* Route for editing teams */}
          <Route path="/delete-team" element={<DeleteTeam/>} /> {/* Route for deleting teams */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
