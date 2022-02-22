/* import logo from './logo.svg'; */
import "./App.css";

import Header from "./components/layout/Header/Header";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Acerca from "./pages/Acerca";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Novedades from "./pages/Novedades";

function App() {
  return (
    <Router>
      <Header></Header>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Acerca" element={<Acerca />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Novedades" element={<Novedades />} />
        <Route path="" element={<div>404 Not Found </div>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
