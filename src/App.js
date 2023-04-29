import React from 'react';
//import react router dom
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Politicas from './pages/Politicas';
import ScrollToTop from './components/ScrollToTop';
import SobreMi from './pages/SobreMi';
import Conocimientos from './pages/Conocimientos';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Home from './pages/Home';




function App() {
  return (
    <Router>
      <ScrollToTop/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/conocimientos" element={<Conocimientos />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/politica-de-proteccion-de-datos-personales" element={<Politicas />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
