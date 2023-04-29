import React from 'react';
//import react router dom
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';




function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>

      </Routes>
    </Router>
  );
}

export default App;
