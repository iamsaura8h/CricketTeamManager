import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Header from './components/Header';
import CreateTeamForm from './components/CreateTeamForm';
import TeamList from './components/TeamList';
import SearchTeam from './components/SearchTeam';
import EditTeam from './components/EditTeam';
import DeleteTeam from './components/DeleteTeam';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router> {/* Wrap the app in Router */}
      <div className="bg-white min-h-screen">
        <Header />
        <div className="flex justify-center items-center md:mt-8">
          <a href="/" className='hidden md:block'>
            <h1 className="text-5xl md:text-8xl font-dancing font-bold text-center text-gray-900">Cricket Manager</h1>
          </a>
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Route for Landing page */}
          <Route path="/home" element={<HomePage />} /> {/* Route for homepage */}
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
