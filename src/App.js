import React from 'react';
//import react router dom
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Politicas from './pages/Politicas';
import ScrollToTop from './components/ScrollToTop';




function App() {
  return (
    <Router>
      <ScrollToTop/>
      <NavBar />
      <Routes>
        <Route path="/politica-de-proteccion-de-datos-personales" element={<Politicas />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
