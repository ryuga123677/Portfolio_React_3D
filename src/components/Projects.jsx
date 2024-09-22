import React from "react";
import portfolio from "../assets/project-images/portfolio.png";
import todo from "../assets/project-images/todo.jpg";
import ghost from "../assets/project-images/ghost.png";
import snake from "../assets/project-images/snake.png";
import hospital from "../assets/project-images/hospital.png";

export const Projects = () => {
  const handleclick = (url) => {
    window.open(url);
  };

  return (
    <>
      <div
        className="flex justify-center text-amber-800 text-5xl font-bold p-5"
        style={{backgroundColor:"#C59B49"}}
      >
        Projects
      </div>
      <div style={{backgroundColor:"#C59B49"}} className="flex flex-wrap justify-evenly gap-20 p-5 text-black">
        {/* Card 1 */}
        <button
          onClick={() => handleclick("https://github.com/ryuga123677/Portfolio_React_3D")}
          className="flex flex-col sm:w-[45%] md:w-[45%] lg:w-[40%] m-5 p-2 glass-effect rounded-md"
        >
          <img
            src={portfolio}
            alt="Portfolio Project"
            className="object-cover rounded-md h-[300px] w-full"
          />
          <div className="mt-4 text-left">
            <div className="text-xl font-bold mb-2">Portfolio Website</div>
            <div className="text-md">
              React, Tailwind CSS, Javascript, Babylon.js, emailjs, framer-motion
            </div>
          </div>
        </button>

        {/* Card 2 */}
        <button
          onClick={() => handleclick("https://github.com/ryuga123677/Hospital_Management")}
          className="flex flex-col sm:w-[45%] md:w-[45%] lg:w-[40%] m-5 p-2 glass-effect rounded-md"
        >
          <img
            src={hospital}
            alt="Hospital Project"
            className="object-cover rounded-md h-[300px] w-full"
          />
          <div className="mt-4 text-left">
            <div className="text-xl font-bold mb-2">HealthCare System</div>
            <div className="text-md">
              MERN stack, MUI, framer-motion, Multer, Cloudinary, JWT, Router
            </div>
          </div>
        </button>

        {/* Card 3 */}
        <button
          onClick={() => handleclick("https://github.com/ryuga123677/Dark-night")}
          className="flex flex-col sm:w-[45%] md:w-[45%] lg:w-[40%] m-5 p-2 glass-effect rounded-md"
        >
          <img
            src={ghost}
            alt="Ghost Project"
            className="object-cover rounded-md h-[300px] w-full"
          />
          <div className="mt-4 text-left">
            <div className="text-xl font-bold mb-2">Ghost Survival Game</div>
            <div className="text-md">Blender 3D, Unity, C#</div>
          </div>
        </button>

        {/* Card 4 */}
        <button
          onClick={() => handleclick("https://github.com/ryuga123677/Snake-and-Ladder")}
          className="flex flex-col sm:w-[45%] md:w-[45%] lg:w-[40%] m-5 p-2 glass-effect rounded-md"
        >
          <img
            src={snake}
            alt="Snake Project"
            className="object-cover rounded-md h-[300px] w-full"
          />
          <div className="mt-4 text-left">
            <div className="text-xl font-bold mb-2">Snake and Ladder</div>
            <div className="text-md">HTML, CSS, Javascript</div>
          </div>
        </button>

        {/* Card 5 */}
        <button
          onClick={() => handleclick("https://github.com/ryuga123677/Chat-Todo-app")}
          className="flex flex-col sm:w-[45%] md:w-[45%] lg:w-[40%] m-5 p-2 glass-effect rounded-md"
        >
          <img
            src={todo}
            alt="Todo Project"
            className="object-cover rounded-md h-[300px] w-full"
          />
          <div className="mt-4 text-left">
            <div className="text-xl font-bold mb-2">Work Tracker</div>
            <div className="text-md">
              Flutter, Dart, Firebase, Authentication, Firestore, Firebase-Notification
            </div>
          </div>
        </button>
      </div>
    </>
  );
};
