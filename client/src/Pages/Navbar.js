import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddTracking.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navigation">
      <div className="logo">SkyParcel Hub</div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <a href="/about-us">About Us</a>
        <div className="user-menu" onClick={toggleDropdown}>
          User Page
          {showDropdown && (
            <div className="dropdown">
              <div
                className="dropdown-item"
                onClick={() => handleNavigation("/mypackages")}
              >
                My Packages
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleNavigation("/addtracking")}
              >
                Add Tracking
              </div>
            </div>
          )}
        </div>
        <a href="/login">Login</a>
        <a href="/search">
          <i className="search-icon">🔍</i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
