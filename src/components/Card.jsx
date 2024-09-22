import React from "react";
import portfolio from "../assets/project-images/portfolio.png";
import todo from "../assets/project-images/todo.jpg";
import ghost from "../assets/project-images/ghost.png";
import snake from "../assets/project-images/snake.png";
import hospital from "../assets/project-images/hospital.png";
import { motion } from "framer-motion";

export const Card1 = () => {
  return (
    <motion.div
    initial={{ y: "0",scale:0, opacity: 0 }}        
    animate={{ 
      y: ["0px", "0px", "100vh"],           
      opacity: [0, 1, 1] ,
      scale:[0,1,1]                
    }}  
    transition={{ 
      delay: 1,                              
      duration: 3,                         
      times: [0, 0.33, 1],                   
    }}
      className="absolute inset-0 flex justify-center items-center h-screen w-screen"
    >
      <div className="flex flex-col text-xl text-white font-bold flex-col justify-center items-center h-[300px] w-[500px] sm:h-[250px] sm:w-[400px] m-5 p-2 glass-effect rounded-md">
        <img
          src={portfolio}
          alt="Portfolio Project"
          className="object-fit h-full w-full rounded-md"
        />
        Portfolio Website
      </div>
    </motion.div>
  );
};

export const Card2 = () => {
  return (
    <motion.div
    initial={{ y: "0", opacity: 0 ,scale:0}}        
    animate={{ 
      y: ["0px", "0px", "100vh"],           
      opacity: [0, 1, 1]   ,
      scale:[0,1,1]                  
    }}  
    transition={{ 
      delay: 2,                              
      duration: 3,                         
      times: [0, 0.33, 1],                   
    }}
      className="absolute inset-0 flex justify-center items-center h-screen w-screen"
    >
      <div className="flex flex-col text-xl text-white font-bold justify-center items-center h-[300px] w-[500px] sm:h-[250px] sm:w-[400px] m-5 p-2 glass-effect rounded-md">
        <img
          src={hospital}
          alt="Hospital Project"
          className="object-fit h-full w-full rounded-md"
        />
        HealthCare System
      </div>
    </motion.div>
  );
};

export const Card3 = () => {
  return (
    <motion.div
    initial={{ y: "0", opacity: 0,scale:0 }}        
    animate={{ 
      y: ["0px", "0px", "100vh"],           
      opacity: [0, 1, 1]   ,
      scale:[0,1,1]                  
    }}  
    transition={{ 
      delay: 3,                              
      duration: 3,                         
      times: [0, 0.33, 1],                   
    }}
      className="absolute inset-0 flex justify-center items-center h-screen w-screen"
    >
      <div className="flex flex-col text-xl text-white font-bold justify-center items-center h-[300px] w-[500px] sm:h-[250px] sm:w-[400px] m-5 p-2 glass-effect rounded-md">
        <img
          src={ghost}
          alt="Ghost Project"
          className="object-fit h-full w-full rounded-md"
        />
        Ghost Survival Game
      </div>
    </motion.div>
  );
};

export const Card4 = () => {
  return (
    <motion.div
    initial={{ y: "0", opacity: 0,scale:0 }}        
    animate={{ 
      y: ["0px", "0px", "100vh"],           
      opacity: [0, 1, 1]   ,
      scale:[0,1,1]                  
    }}  
    transition={{ 
      delay: 4,                              
      duration: 3,                         
      times: [0, 0.33, 1],                   
    }}
      className="absolute inset-0 flex justify-center items-center h-screen w-screen"
    >
      <div className="flex flex-col text-xl text-white font-bold justify-center items-center h-[300px] w-[500px] sm:h-[250px] sm:w-[400px] m-5 p-2 glass-effect rounded-md">
        <img
          src={snake}
          alt="Snake Project"
          className="object-fit h-full w-full rounded-md"
        />
        Snake and Ladder
      </div>
    </motion.div>
  );
};

export const Card5 = () => {
  return (
    <motion.div
    initial={{ y: "0", opacity: 0,scale:0 }}        
    animate={{ 
      y: ["0px", "0px", "100vh"],           
      opacity: [0, 1, 1]   ,
      scale:[0,1,1]                  
    }}  
    transition={{ 
      delay: 5,                              
      duration: 3,                         
      times: [0, 0.33, 1],                   
    }}
      className="absolute inset-0 flex justify-center items-center h-screen w-screen"
    >
      <div className="flex flex-col text-xl text-white font-bold justify-center items-center h-[300px] w-[500px] sm:h-[250px] sm:w-[400px] m-5 p-2 glass-effect rounded-md">
        <img
          src={todo}
          alt="Todo Project"
          className="object-fit h-full w-full rounded-md"
        />
        Work Tracker
      </div>
    </motion.div>
  );
};
``
