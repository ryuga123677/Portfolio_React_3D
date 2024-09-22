import React, { useState } from "react";
import { Insrtuctions } from "./Insrtuctions";
import { Hireme } from "./Hireme";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close

export const Navbar = () => {
  const [instruct, setInstruct] = useState(false);
  const [hireme, setHireme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1wN6vqSVbpScyIGPUJFxk7gICAJ0R20BC/view?usp=drivesdk/",
      "newtab",
      "status=1,fullscreen=1"
    );
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center justify-between bg-gray-900 h-14 px-4 text-white">
        {/* Logo */}
        <div
          style={{ color: "#e91e63", fontFamily: "Mufan" }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Harshit's Portfolio
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-10 text-2xl">
          <button onClick={() => setInstruct(true)} className="hover:text-pink-500">
            Instructions
          </button>
          <button className="hover:text-pink-500">Skills</button>
          <button onClick={handleResume} className="hover:text-pink-500">
            Resume
          </button>
          <button onClick={() => setHireme(true)} className="hover:text-pink-500">
            Hire me
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-gray-900 text-white space-y-4 py-4">
          <button onClick={() => setInstruct(true)} className="hover:text-pink-500">
            Instructions
          </button>
          <button className="hover:text-pink-500">Skills</button>
          <button onClick={handleResume} className="hover:text-pink-500">
            Resume
          </button>
          <button onClick={() => setHireme(true)} className="hover:text-pink-500">
            Hire me
          </button>
        </div>
      )}

      {/* Instructions Modal */}
      {instruct && (
        <div className="absolute top-0 left-0 inset-0 h-full w-full bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
            <button
              onClick={() => setInstruct(false)}
              className="absolute top-2 right-2 text-white font-bold"
            >
              X
            </button>
            <Insrtuctions />
          </div>
        </div>
      )}

      {/* Hire Me Modal */}
      {hireme && (
        <div className="absolute top-0 left-0 inset-0 h-full w-full bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
            <button
              onClick={() => setHireme(false)}
              className="absolute top-2 right-2 text-white font-bold"
            >
              X
            </button>
            <Hireme />
          </div>
        </div>
      )}
    </>
  );
};
