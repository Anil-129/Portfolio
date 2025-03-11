import React from "react";

function Home() {
  return (
    <div className="p-16 bg-gray-800 text-white  shadow-xl  ">
      <div className="max-w-4xl mx-auto">
       
        <h1 className="text-5xl font-extrabold mb-6 text-left">
          Hi, I'm Anil Kumar
        </h1>

      
        <p className="text-3xl mb-4 text-left font-bold">
          Frontend Developer | React.js & JavaScript Enthusiast
        </p>

       
        <p className="text-xl text-left mb-6">
          Welcome to my portfolio! I'm Anil Kumar Arkatavemula, a Front-end Developer with a passion for creating beautiful, responsive, and user-friendly websites. I have a strong background in HTML, CSS, JavaScript, and React. I am always looking for new challenges and opportunities to learn and grow as a developer.
        </p>

        
        <p className="text-lg text-left mb-4">
          Feel free to explore my work and learn more about my projects and skills. I'm excited to collaborate and work on innovative ideas!
        </p>

       
        <a
          href="/My Resume.jpg"  
          download="My Resume.jpg"  
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg text-xl font-semibold hover:scale-105 transform transition-all duration-300"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
