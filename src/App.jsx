import React from 'react';

// Layout & Common Components
import NavBar from './components/NavBar'; // Changed to capital 'B'

// Page Sections
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Project from './components/Project'; // Removed the 's' to match your sidebar
import Contact from './components/Contact';
import Footer from  './components/Footer'
function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Project /> {/* Use singular to match the import */}
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;