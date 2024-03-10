import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import router from "./router";
import Auth from "./Pages/Auth.js";
import Homepage from "./Pages/Homepage.js";
import MyPackages from "./Pages/MyPackages";
import AddTracking from "./Pages/AddTracking.js";

function App() {
  return (
    // <RouterProvider router={router}></RouterProvider>

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/mypackages" element={<MyPackages />} />
          <Route path="/addtracking" element={<AddTracking />} />
        </Routes>
      </div>
    </Router>

    // <div className="App">
    //   <Auth />
    // </div>
  );
}

export default App;
