import React from "react";

function Projects() {
  return (
    <div className="p-8 bg-gray-800 text-white rounded-lg shadow-xl">
     
      <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
        My Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
       
        <div className="bg-black text-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-3xl font-semibold mb-3 text-gradient bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
            HRMS Application - HRWorkday
          </h3>
          <p className="text-lg mb-4">
            Developed a comprehensive HRMS system to manage employee onboarding, leave management, payroll integration, and more.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Technologies used: React.js, Tailwind CSS, REST APIs, Agile, GitHub</li>
            <li>Key Features: Employee Onboarding, Leave Management, Payroll Integration, Dynamic Forms, Real-Time Data Updates</li>
          </ul>
          <a
            href="https://www.hrworkday.com/"  
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            View Project
          </a>
        </div>

       
        <div className="bg-black text-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-3xl font-semibold mb-3 text-gradient bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Contact Manager App
          </h3>
          <p className="text-lg mb-4">
            A web app for managing contacts with the ability to perform all CRUD operations and search for specific contacts.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Technologies used: React JS, CSS, JavaScript, Bootstrap, HTML</li>
            <li>Key Features: Create, Read, Update, Delete (CRUD) Operations, Contact Search</li>
          </ul>
          <a
            href="https://manager-app-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            View Project
          </a>
        </div>

        
        <div className="bg-black text-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-3xl font-semibold mb-3 text-gradient bg-gradient-to-r from-teal-400 to-blue-600 text-transparent bg-clip-text">
            Weather App
          </h3>
          <p className="text-lg mb-4">
            A weather app that fetches data from a weather API to display current weather conditions based on user location or input.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Technologies used: HTML, CSS, Bootstrap, JavaScript, REST API Calls</li>
            <li>Key Features: Weather Fetching, Dynamic Location-based Results</li>
          </ul>
          <a
            href="https://weather-anil-kumar-1299.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
