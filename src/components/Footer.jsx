import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; 

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6 mt-auto">
      <p className="text-sm">
        
        <a
          href="https://www.linkedin.com/in/anil-kumar-arkatavemula"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 inline-flex items-center text-white hover:text-blue-500 hover:scale-125 transition-all duration-300"
        >
          <FaLinkedin className="mr-1 text-3xl" />
        </a>

        
        <a
          href="https://github.com/Anil-129"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 inline-flex items-center text-white hover:text-gray-400 hover:scale-125 transition-all duration-300"
        >
          <FaGithub className="mr-1 text-3xl" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
