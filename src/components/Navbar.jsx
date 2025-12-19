import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ChangingText from "./ChangingText";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (path) => {
   
    navigate(path);
    if(path === "/") {
      window.location.reload();
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex bg-black items-center justify-between h-[9vh] px-4 text-white">
        {/* Logo */}
        <div className="pl-4 lg:text-4xl flex flex-col">
          <div className="mt-1">Harshit's Portfolio</div>
          <ChangingText />
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
        <div className="hidden sm:flex space-x-10 text-2xl ">
          <button
            className="hover:text-amber-300 hover:scale-125 transition-all"
            onClick={() => goTo("/")}
          >
            Home
          </button>
          <button
            onClick={() => goTo("/instructions")}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Instructions
          </button>
          <button
            onClick={() => goTo("/skills")}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Skills
          </button>
          <button
            onClick={() =>  window.open(
              "https://drive.google.com/file/d/1wN6vqSVbpScyIGPUJFxk7gICAJ0R20BC/view?usp=drivesdk/",
              "newtab",
              "status=1,fullscreen=1"
            )}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Resume
          </button>
          <button
            onClick={() => goTo("/hireme")}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Hire me
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-black text-white space-y-4 py-4">
          <button
            className="hover:text-amber-300 hover:scale-125 transition-all"
            onClick={() => { goTo("/"); }}
          >
            Home
          </button>
          <button
            onClick={() => goTo("/instructions")}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Instructions
          </button>
          <button
            onClick={() => goTo("/skills")}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Skills
          </button>
          <button
            onClick={() => goTo("/resume")}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Resume
          </button>
          <button
            onClick={() => goTo("/hireme")}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Hire me
          </button>
        </div>
      )}
    </>
  );
};
