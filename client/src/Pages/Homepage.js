import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let navigate = useNavigate();

  const goToMyPackages = () => {
    navigate("/mypackages"); // Use the route path you defined for MyPackages
  };

  const goToAddTracking = () => {
    navigate("/addtracking"); // Use the route path you defined for MyPackages
  };

  return (
    <div>
      <nav className="navigation">
        <div className="logo">SkyParcel Hub</div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
        <div className={`menu ${isMenuOpen ? "show" : ""}`}>
          <a href="/about-us">About Us</a>
          <div className="user-menu">User Page</div>
          <a href="/login">Login</a>
          <a href="/search">
            <i className="search-icon">🔍</i>
          </a>
        </div>
      </nav>
      <div className="homepage">
        <header className="header">
          <h1>Your Best Delivery Solution</h1>
        </header>
        <div className="buttons">
          <button onClick={goToMyPackages}>My Packages</button>
          <button onClick={goToAddTracking}>Add a Tracking</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
