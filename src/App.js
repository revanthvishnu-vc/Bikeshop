import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Menu from './Pages/Menu/Menu.jsx';
import Contact from "./Pages/Contact/Contact.jsx";

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
