import React, { useState } from "react";
import "./AddTracking.css"; // Make sure to create this CSS file

function AddTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [packages, setPackages] = useState([]);

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    if (trackingNumber.trim() !== "") {
      setPackages([...packages, trackingNumber]);
      setTrackingNumber(""); // Clear the input for the next entry
    }
  };

  return (
    <div className="add-tracking">
      <div className="tracking-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="tracking-input">
            Please enter package tracking number provided by your carrier:
          </label>
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
      <div className="on-the-way-packages">
        <h2>On the way Packages:</h2>
        <ul>
          {packages.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddTracking;
