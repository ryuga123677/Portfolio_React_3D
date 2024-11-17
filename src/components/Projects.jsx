import React from "react";
import portfolio from "../assets/project-images/portfolio.png";
import todo from "../assets/project-images/todo.jpg";
import ghost from "../assets/project-images/ghost.png";
import snake from "../assets/project-images/snake.png";
import hospital from "../assets/project-images/hospital.png";
import mouse from "../assets/project-images/mouse.jpg";
export const Projects = () => {
  const handleclick = (url) => {
    window.open(url);
  };

  return (
    <>
    <div className="">
      <div
        className="flex bg-[#560a0a] justify-center text-white text-5xl font-bold p-5"
        
      >
        Projects
      </div>
      <div
       
        className="flex bg-[repeating-linear-gradient(45deg,#8d3131_0,#8d3131_17px,transparent_0,transparent_50%)] bg-[#640f0f] bg-[length:50px_50px] flex-wrap justify-evenly gap-20 p-5 text-white"
      >
        {/* Card 1 */}
        <button
          onClick={() =>
            handleclick("https://github.com/ryuga123677/Portfolio_React_3D")
          }
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
              React, Tailwind CSS, Javascript, Babylon.js, emailjs,
              framer-motion
            </div>
          </div>
        </button>

        {/* Card 2 */}
        <button
          onClick={() =>
            handleclick("https://github.com/ryuga123677/Jobify-Frontend")
          }
          className="flex flex-col sm:w-[45%] md:w-[45%] lg:w-[40%] m-5 p-2 glass-effect rounded-md"
        >
          <img
            src={hospital}
            alt="Jobify Project"
            className="object-cover rounded-md h-[300px] w-full"
          />
          <div className="mt-4 text-left">
            <div className="text-xl font-bold mb-2">Jobify</div>
            <div className="text-md">
              MERN stack, Tailwind css, framer-motion, Multer, Cloudinary, JWT, Router
            </div>
          </div>
        </button>

        {/* Card 3 */}
        <button
          onClick={() =>
            handleclick("https://github.com/ryuga123677/Chat-Todo-app")
          }
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
              Flutter, Dart, Firebase, Authentication, Firestore,
              Firebase-Notification
            </div>
          </div>
        </button>

        {/* Card 4 */}
        <button
          onClick={() =>
            handleclick("https://github.com/ryuga123677/Snake-and-Ladder")
          }
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
          onClick={() =>
            handleclick("https://github.com/ryuga123677/Dark-night")
          }
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

        {/* Card 6 */}
        <button
          onClick={() =>
            handleclick("https://github.com/ryuga123677/Mouse-runner")
          }
          className="flex flex-col sm:w-[45%] md:w-[45%] lg:w-[40%] m-5 p-2 glass-effect rounded-md"
        >
          <img
            src={mouse}
            alt="Mouse Runner Project"
            className="object-cover rounded-md h-[300px] w-full"
          />
          <div className="mt-4 text-left">
            <div className="text-xl font-bold mb-2">Mouse Runner (Android)</div>
            <div className="text-md">Unity ,Blender 3D</div>
          </div>
        </button>
      </div>
      </div>
    </>
  );
};
