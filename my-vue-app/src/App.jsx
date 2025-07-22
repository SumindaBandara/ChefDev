import React from 'react';

import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import Gallaries from './components/sections/Gallaries';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-800 font-sans">
      <Navbar />

      <Routes>
        <Route 
          path="/"
          element={<main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>}
      />
      <Route path="/gallary" element={<Gallaries />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
