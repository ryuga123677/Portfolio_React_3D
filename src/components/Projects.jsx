import React from "react";
import portfolio from "../assets/project-images/portfolio.png";
import todo from "../assets/project-images/todo.jpg";
import ghost from "../assets/project-images/ghost.png";
import snake from "../assets/project-images/snake.png";
import hospital from "../assets/project-images/hospital.png";

export const Projects = () => {
  const handleclick=(url)=>{
window.open(url);
  }
  return (
    <>
      <div
        className="flex justify-center bg-gray-900 text-5xl font-bold p-5"
        style={{ color: "#e91e63" }}
      >
        Projects
      </div>
      <div className="flex flex-wrap  h-max p-2 text-white justify-evenly bg-gray-900">
        <button onClick={()=>handleclick("https://github.com/ryuga123677/Portfolio_React_3D")} className="h-[30%] w-[40%] m-5 p-2 glass-effect rounded-md">
          <img
            src={portfolio}
            alt="Portfolio Project"
            className="object-cover h-full w-full rounded-md"
          />
          <div className="text-xl m-3">Portfolio Website</div>
          <div className="text-md m-3">React, Tailwind CSS, Javascript, Babylonjs, emailjs, framer-motion</div>
        </button>
        <button onClick={()=>handleclick("https://github.com/ryuga123677/Hospital_Management")} className="h-[30%] w-[40%] m-5 p-2 glass-effect rounded-md">
          <img
            src={hospital}
            alt="Hospital Project"
            className="object-cover h-full w-full rounded-md"
          />
          <div className="text-xl m-3">HealthCare System</div>
          <div className="text-md m-3">MERN stack, MUI,framer-motion,Multer,Cloudinary,JWT,Router</div>
        </button>
        <button onClick={()=>handleclick("https://github.com/ryuga123677/Dark-night")}className="h-[30%] w-[40%] m-5 p-2 glass-effect rounded-md">
          <img
            src={ghost}
            alt="Ghost Project"
            className="object-cover h-full w-full rounded-md"
          />
          <div className="text-xl m-3">Ghost Survival Game</div>
          <div className="text-md m-3">Blender 3D, Unity, C#</div>
        </button>
        <button onClick={()=>handleclick("https://github.com/ryuga123677/Snake-and-Ladder")} className="h-[30%] w-[40%] m-5 p-2 glass-effect rounded-md">
          <img
            src={snake}
            alt="Snake Project"
            className="object-cover h-full w-full rounded-md"
          />
          <div className="text-xl m-3">Snake and Ladder</div>
          <div className="text-md m-3">HTML,CSS,Javascript</div>
        </button>
        <button onClick={()=>handleclick("https://github.com/ryuga123677/Chat-Todo-app")} className="h-[20%] w-[40%] m-5 p-2 glass-effect rounded-md">
          <img
            src={todo}
            alt="Todo Project"
            className="object-cover h-full w-full rounded-md"
          />
          <div className="text-xl m-3">Work Tracker</div>
          <div className="text-md m-3">Flutter, Dart,Firebase,Authentication,Firestore,Firebase-Notification </div>
        </button>
      </div>
    </>
  );
};
