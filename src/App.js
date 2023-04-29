import React from 'react';
//import react router dom
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';




function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
