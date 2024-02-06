import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Menu from './Pages/Menu/Menu.js';
import Contact from "./Pages/Contact/Contact.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes >
        <Footer />
      </Router>
    </div>
  );
}

export default App;
