import React from "react";
import portfolio from "../assets/project-images/portfolio.png";
import todo from "../assets/project-images/todo.jpg";
import ghost from "../assets/project-images/ghost.png";
import snake from "../assets/project-images/snake.png";
import hospital from "../assets/project-images/hospital.png";

export const Projects = () => {
  return (
    <>
      <div
        className="bg-gray-900 text-4xl font-bold p-5"
        style={{ color: "#e91e63" }}
      >
        Projects
      </div>
      <div className="flex flex-wrap h-max p-2 justify-evenly bg-gray-900">
        <button className="h-[200px] w-[500px] m-5 p-2 glass-effect rounded-md">
          <img
            src={portfolio}
            alt="Portfolio Project"
            className="object-cover h-full w-full rounded-md"
          />
          <div style={{ color: "#e91e63" }} className="text-xl m-3">
            Portfolio Website
          </div>
        </button>
        <button className="h-[200px] w-[500px] m-5 p-2 glass-effect rounded-md">
          <img
            src={hospital}
            alt="Hospital Project"
            className="object-cover h-full w-full rounded-md"
          />
          <div style={{ color: "#e91e63" }} className="text-xl m-3">
            HealthCare System
          </div>
        </button>
        <button className="h-[200px] w-[500px] m-5 p-2 glass-effect rounded-md">
          <img
            src={ghost}
            alt="Ghost Project"
            className="object-cover h-full w-full rounded-md"
          />
          <div style={{ color: "#e91e63" }} className="text-xl m-3">
            Ghost Survival Game
          </div>
        </button>
        <button className="h-[200px] w-[500px] m-5 p-2 glass-effect rounded-md">
          <img
            src={snake}
            alt="Snake Project"
            className="object-cover h-full w-full rounded-md"
          />
          <div style={{ color: "#e91e63" }} className="text-xl m-3">
            Snake and Ladder
          </div>{" "}
        </button>
        <button className="h-[200px] w-[500px] m-5 p-2 glass-effect rounded-md">
          <img
            src={todo}
            alt="Todo Project"
            className="object-fit h-full w-full rounded-md"
          />
          <div style={{ color: "#e91e63" }} className="text-xl m-3">
            Work Tracker
          </div>
        </button>
      </div>
    </>
  );
};
