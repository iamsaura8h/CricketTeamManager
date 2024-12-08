import React from 'react';
import Header from './components/Header';
import CreateTeamForm from './components/CreateTeamForm';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex justify-center items-center p-10">
        <h1 className="text-4xl font-bold text-blue-600">Hello, World!</h1>
        
      </div>
      <CreateTeamForm/>
    </div>
  );
}

export default App;
