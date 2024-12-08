import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Header from './components/Header';
import CreateTeam from './components/CreateTeamForm'; // Updated component name
import DisplayTeam from './components/TeamList'; // Updated component name
import CreateTeamForm from './components/CreateTeamForm';
import TeamList from './components/TeamList';

function App() {
  return (
    <Router> {/* Wrap the app in Router */}
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="flex justify-center items-center p-10">
          <h1 className="text-4xl font-bold text-blue-600">Hello, World!</h1>
        </div>
        <Routes>
          <Route path="/create-team" element={<CreateTeamForm />} /> {/* Route for creating teams */}
          <Route path="/display-team" element={<TeamList />} /> {/* Route for displaying teams */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
