import React from "react";
import "./MyPackages.css"; // Ensure you have this CSS file
import packageImage from "./package.png"; // Adjust the path to where your image is stored

function MyPackages() {
  return (
    <div className="my-packages">
      <img src={packageImage} alt="data dashboard" />
    </div>
  );
}

export default MyPackages;
