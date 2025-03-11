import React from 'react';

const Education = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-14">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-center md:text-center">Education</h2>

      
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold text-white">B.Tech in Civil Engineering</h3>
        <p className="text-gray-400">JNTU College of Engineering Anantapur, 2019 - 2023</p>
        <p className="text-gray-400">CGPA: 7.61</p>
      </div>

      
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold text-white">Intermediate (12th Grade)</h3>
        <p className="text-gray-400">Gitanjali Junior College Kadapa, 2017 - 2019</p>
        <p className="text-gray-400">CGPA: 9.7</p>
      </div>

      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold text-white">School (10th Grade)</h3>
        <p className="text-gray-400">Z.P.High School Neelapuram, 2017</p>
        <p className="text-gray-400">CGPA: 8.7</p>
      </div>
    </div>
  );
};

export default Education;
