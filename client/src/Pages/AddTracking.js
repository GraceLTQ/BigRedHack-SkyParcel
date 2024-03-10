import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddTracking.css";

function AddTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [packages, setPackages] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const generateFutureDate = () => {
    const startDate = new Date("March 10, 2024");
    // Generate random number of days from 1 to 365
    const additionalDays = Math.floor(Math.random() * 26) + 1;
    const futureDate = new Date(startDate.getTime());
    futureDate.setDate(startDate.getDate() + additionalDays);

    return futureDate.toDateString(); // Format to a readable date string
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (trackingNumber.trim() !== "") {
      const arrivalDate = generateFutureDate();
      setPackages([...packages, { number: trackingNumber, date: arrivalDate }]);
      setTrackingNumber(""); // Clear the input field
    }
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
          <a href="/homepage">Home</a>
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

      <div className="add-tracking">
        <div className="tracking-form">
          <form onSubmit={handleSubmit}>
            {/* <label htmlFor="tracking-input">
            Please enter package tracking number provided by your carrier:
          </label> */}
            <input
              type="text"
              id="tracking-input"
              value={trackingNumber}
              onChange={handleInputChange}
              placeholder="Enter tracking number"
            />
            <button type="submit">Add Tracking</button>
          </form>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="on-the-way-packages">
          <h2>On the way Packages:</h2>
          <ul>
            {packages.map((pkg, index) => (
              <li
                key={index}
              >{`${pkg.number} - Estimated arrival date: ${pkg.date}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddTracking;
