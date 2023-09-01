import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from "./components/Navbar";

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };
  return (
    <>
      <h4 className={`app-h4 ${darkMode ? 'dark' : 'light'}`}>
        👨🏻‍💻Sukrit. Web Design & Development.{" "} 
        <button className="app-button" onClick={toggleDarkMode}>{darkMode ? "🔆" : "🌙" }</button>
      </h4>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
      <Navbar className="navbar" />
    </>
  );
}

export default App;
