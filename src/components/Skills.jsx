import React from "react";

function Skills() {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white rounded-lg shadow-xl mt-12">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
       
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">React JS</h3>
        </div>
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">JavaScript</h3>
        </div>
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">Tailwind CSS</h3>
        </div>
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-green-500 via-lime-400 to-yellow-400 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">Vite</h3>
        </div>
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">HTML</h3>
        </div>
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">CSS</h3>
        </div>
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-400 via-indigo-600 to-purple-700 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">Python</h3>
        </div>
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">SQL</h3>
        </div>
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-gray-500 via-blue-500 to-indigo-600 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">GitHub</h3>
        </div>
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">Node.js</h3>
        </div>
        <div className="bg-gray-900 text-white text-center p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-700 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">Unit Testing</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
