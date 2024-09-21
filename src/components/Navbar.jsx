import React, { useState } from "react";
import { Insrtuctions } from "./Insrtuctions";
import { Hireme } from "./Hireme";
export const Navbar = () => {
  const [instruct, setinstruct] = useState(false);
  const [hireme, sethireme] = useState(false);
const handleresume=() => {
  window.open("https://drive.google.com/file/d/1wN6vqSVbpScyIGPUJFxk7gICAJ0R20BC/view?usp=drivesdk/", "newtab", "status=1,fullscreen=1");
}
  return (
    <>
      <div className="flex bg-gray-900 h-10 justify-center text-white justify-evenly">
        <div style={{ color: "#e91e63" }} className="text-2xl">
          Harshit's Portfolio
        </div>
        <button onClick={() => setinstruct(true)}>Instructions</button>
        <button>Skills</button>
        <button onClick={()=>handleresume()}>Resume</button>
        <button onClick={()=>sethireme(true)}>Hire me</button>
      </div>
      {instruct && (
        <div className="absolute top-0 left-0 inset-0 h-full w-full bg-transparent bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center relative">
            <button
              onClick={() => setinstruct(false)}
              className="absolute top-2 right-2 text-white font-bold"
            >
              X
            </button>
            <Insrtuctions />
          </div>
        </div>
      )}
      {hireme && (
        <div className="absolute top-0 left-0 inset-0 h-full w-full bg-transparent bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center relative">
            <button
              onClick={() => sethireme(false)}
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
