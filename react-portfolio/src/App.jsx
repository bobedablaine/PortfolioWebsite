import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './views/Home/Home.jsx';
import Projects from './views/Projects/Projects.jsx';


function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    </>
);
  
}

export default App
