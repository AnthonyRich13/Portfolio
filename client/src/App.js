import React from "react";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

import Navbar from "./components/navbar"
import Footer from "./components/footer"

import "./public/styles/style.css";

import HomePage from "./components/homePage";
import TimelinePage from "./components/timelinePage";
import ProjectsPage from "./components/projectsPage";
import InterestsPage from "./components/interestsPage";
import CompetencesPage from "./components/competencesPage";

function App() {
  return (
      <div className="app">
          <Router>
          <Navbar />
            <Routes>
            <Route path='/' element={<HomePage/>}/>
              <Route path='/timeline' element={<TimelinePage/>}/>
              <Route path='/projects' element={<ProjectsPage/>}/>
              <Route path='/interests' element={<InterestsPage/>}/>
              <Route path='/competences' element={<CompetencesPage/>}/>
            </Routes>
            <Footer />
          </Router>
      </div>
      
  );
}

export default App;
