import { useState, useEffect } from "react";
import { Home } from "./scenes/home";
import { Contact } from "./scenes/contact";
import { About } from "./scenes/about";
import { Projects } from "./scenes/projects";
import { Footer } from "./scenes/footer";
import Navbar from "./scenes/navbar";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar
       />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
          
    </BrowserRouter>

  );
}

export default App;
