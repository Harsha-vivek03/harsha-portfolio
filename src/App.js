import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

import ProjectDetails from './Components/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="main">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
