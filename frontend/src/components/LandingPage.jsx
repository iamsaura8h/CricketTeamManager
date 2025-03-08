import React from 'react';

const CricketManagerHero = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              The smarter cricket workspace
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-10">
              Create teams. Schedule tournaments. Dominate the pitch.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Manage Your Teams</h3>
                  <p className="text-gray-600">Create, view, edit, and manage your cricket teams with ease.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Tournament Scheduler</h3>
                  <p className="text-gray-600">Create tournaments and generate fixtures automatically.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/create-team">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md text-lg">
                  Create a Team
                </button>
              </a>
              <a href="/display-team">
                <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold py-2 px-4 rounded-md text-lg">
                  View Teams
                </button>
              </a>
            </div>
            {/* <div className="mt-12">
              <p className="text-gray-600 mb-4">Trusted by cricket clubs worldwide</p>
              <div className="flex flex-wrap gap-8 items-center">
                <img src="/api/placeholder/80/40" alt="Cricket club logo" className="h-8" />
                <img src="/api/placeholder/80/40" alt="Cricket club logo" className="h-8" />
                <img src="/api/placeholder/80/40" alt="Cricket club logo" className="h-8" />
                <img src="/api/placeholder/80/40" alt="Cricket club logo" className="h-8" />
              </div>
            </div> */}
          </div>
          
          {/* Right side illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <svg className="w-full h-auto" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                {/* Background elements */}
                <circle cx="250" cy="200" r="180" fill="none" stroke="#f3f4f6" strokeWidth="20" />
                <circle cx="250" cy="200" r="150" fill="none" stroke="#e5e7eb" strokeWidth="15" />
                
                {/* Teams UI card */}
                <rect x="120" y="100" width="120" height="150" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <rect x="130" y="110" width="100" height="20" rx="3" fill="#f3f4f6" />
                <rect x="130" y="140" width="100" height="10" rx="2" fill="#e5e7eb" />
                <rect x="130" y="160" width="100" height="10" rx="2" fill="#e5e7eb" />
                <rect x="130" y="180" width="100" height="10" rx="2" fill="#e5e7eb" />
                <rect x="130" y="200" width="60" height="20" rx="3" fill="#3b82f6" />
                
                {/* Schedule UI card */}
                <rect x="260" y="120" width="150" height="180" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <rect x="270" y="130" width="130" height="20" rx="3" fill="#f3f4f6" />
                
                {/* Tournament bracket */}
                <line x1="280" y1="170" x2="310" y2="170" stroke="#000" strokeWidth="2" />
                <line x1="280" y1="200" x2="310" y2="200" stroke="#000" strokeWidth="2" />
                <line x1="310" y1="170" x2="310" y2="200" stroke="#000" strokeWidth="2" />
                <line x1="310" y1="185" x2="340" y2="185" stroke="#000" strokeWidth="2" />
                
                <line x1="280" y1="230" x2="310" y2="230" stroke="#000" strokeWidth="2" />
                <line x1="280" y1="260" x2="310" y2="260" stroke="#000" strokeWidth="2" />
                <line x1="310" y1="230" x2="310" y2="260" stroke="#000" strokeWidth="2" />
                <line x1="310" y1="245" x2="340" y2="245" stroke="#000" strokeWidth="2" />
                
                <line x1="340" y1="185" x2="340" y2="245" stroke="#000" strokeWidth="2" />
                <line x1="340" y1="215" x2="370" y2="215" stroke="#000" strokeWidth="2" />
                <circle cx="390" cy="215" r="15" fill="#cc0000" />
                
                {/* Cricket elements */}
                <circle cx="170" cy="300" r="15" fill="#cc0000" />
                <path d="M165,290 Q170,296 175,290" fill="none" stroke="#fff" strokeWidth="1" />
                <path d="M165,310 Q170,304 175,310" fill="none" stroke="#fff" strokeWidth="1" />
                
                <rect x="360" y="100" width="15" height="70" rx="2" transform="rotate(30, 360, 100)" fill="#8b4513" />
                <rect x="348" y="87" width="30" height="15" rx="2" transform="rotate(30, 360, 100)" fill="#8b4513" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketManagerHero;