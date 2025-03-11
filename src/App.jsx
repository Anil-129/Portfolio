import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills"; 
import Education from "./components/Education";  // Ensure this is correct
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />  
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
