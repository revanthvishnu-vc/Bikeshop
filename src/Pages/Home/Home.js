import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../Assets/background.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <Link to='menu'>
          <button>Explore</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
