
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Hireme } from "./components/Hireme";
import { Insrtuctions } from "./components/Insrtuctions";
import "./index.css";

const ResumePage = () => {
  useEffect(() => {
    // Open the resume in a new tab when this route is visited
    window.open(
      "https://drive.google.com/file/d/1wN6vqSVbpScyIGPUJFxk7gICAJ0R20BC/view?usp=drivesdk/",
      "newtab",
      "status=1,fullscreen=1"
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-[91vh] bg-[#C59B49] text-white text-xl">
      <p>Your resume has been opened in a new tab.</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div
        style={{ backgroundColor: "#C59B49" }}
        className="flex flex-col min-h-screen"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/instructions" element={<Insrtuctions />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hireme" element={<Hireme />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
