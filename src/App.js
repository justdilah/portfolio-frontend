import React from "react";
import './css/App.css';
import './css/Monitor.css';
import './css/Laptop.css';
import './css/Tablet.css';
import './css/MobileMax.css';
import './css/Mobile.css';
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Competition from "./pages/Competition";
import Experience from "./pages/Experience";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";


function App() {

  return (
      <Router>
          <div className="App">
            <header className="App-header">
              <Navbar/>
            </header>
            <Contact/>
            <Routes>
                <Route Route exact path='/' element={<Home />} />
                <Route Route exact path='/aboutme' element={<AboutMe />} />
                <Route Route exact path='/projects' element={<Projects />} />
                <Route path="/project/:Name" element={<Project />} />
                <Route Route exact path='/skills' element={<Skills />} />
                <Route Route exact path='/competition/:Name' element={<Competition />} />
                <Route Route exact path='/experience/:Name' element={<Experience />} />

            </Routes>
            <footer>
                <p>@justdilah</p>
            </footer>
          </div>
      </Router>
  );
}

export default App;
