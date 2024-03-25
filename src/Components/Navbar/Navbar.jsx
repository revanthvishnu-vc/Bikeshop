import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../Assets/logo.jpg';
import ReorderIcon from '@mui/icons-material/Reorder';
import "./Navbar.css";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const [menu , setMenu] = useState("Home");

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  
  
  return (
    <>
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} style={{ width: "90px", height: "90px" }} alt="Logo" />
          <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/" onClick={() => {setMenu("Home")}}> Home {menu === "Home"?<hr/>:<></>} </Link>
          <Link to="/menu" onClick={() => {setMenu("Menu")}}> Menu {menu === "Menu"?<hr/>:<></>}</Link>
          <Link to="/about" onClick={() => {setMenu("About")}}> About {menu === "About"?<hr/>:<></>}</Link>
          <Link to="/contact" onClick={() => {setMenu("Contact")}}> Contact {menu === "Contact"?<hr/>:<></>}</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;


