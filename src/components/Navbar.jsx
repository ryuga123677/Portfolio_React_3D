import React, { useState } from "react";
import { Insrtuctions } from "./Insrtuctions";
import { Hireme } from "./Hireme";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close
import { Skills } from "./Skills";
import ChangingText from "./ChangingText";

export const Navbar = () => {
  const [instruct, setInstruct] = useState(false);
  const [hireme, setHireme] = useState(false);
  const [skills, setskills] = useState(false);
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
      <div className="flex bg-[#853824] items-center justify-between h-[9vh] px-4 text-white">
        {/* Logo */}
        <div
       
          className="pl-4 flex flex-col"
        >
          <div className="lg:text-4xl sm:text-2xl mt-1 font-bold">  Harshit's Portfolio</div>
        
        <ChangingText/>
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
          <button  className="hover:text-amber-300 hover:scale-125 transition-all" onClick={()=>{window.location.reload();}}>Home</button>
          <button
            onClick={() => setInstruct(true)}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Instructions
          </button>
          <button
            onClick={() => setskills(true)}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Skills
          </button>
          <button onClick={handleResume} className="hover:text-amber-300 hover:scale-125 transition-all">
            Resume
          </button>
          <button
            onClick={() => setHireme(true)}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Hire me
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-[#853824] text-white space-y-4 py-4">
          <button  className="hover:text-amber-300 hover:scale-125 transition-all" onClick={()=>{window.location.reload();}}>Home</button>
          <button
            onClick={() => setInstruct(true)}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Instructions
          </button>
          <button
            onClick={() => {
              setskills(true);
              setIsMenuOpen(false);
            }}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Skills
          </button>
          <button onClick={handleResume} className="hover:text-amber-300 hover:scale-125 transition-all">
            Resume
          </button>
          <button
            onClick={() => setHireme(true)}
            className="hover:text-amber-300 hover:scale-125 transition-all"
          >
            Hire me
          </button>
        </div>
      )}

      {/* Instructions Modal */}
      {instruct && (
        <div className="absolute top-0 left-0 inset-0 h-full w-full bg-blur bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-[#853824] p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
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
        <div className="absolute top-0 left-0 inset-0 h-full w-full  bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-[#853824] p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
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
      {skills && <Skills onchange={setskills} />}
    </>
  );
};
