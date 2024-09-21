import React from 'react'
import portfolio from "../assets/project-images/portfolio.png";
import todo from "../assets/project-images/todo.jpg";
import ghost from "../assets/project-images/ghost.png";
import snake from "../assets/project-images/snake.png";
import hospital from "../assets/project-images/hospital.png";
export const Card1 = () => {
  return (
    <>   <div className="absolute inset-0 h-[200px] w-[200px] m-5 p-2 glass-effect rounded-md">
    <img
      src={portfolio}
      alt="Portfolio Project"
      className="object-fit h-full w-full rounded-md"
    />
    
  </div>
    </>
  )
}
export const Card2 = () => {
    return (
      <>   <div className="h-[200px] w-[200px] m-5 p-2 glass-effect rounded-md">
      <img
        src={hospital}
        alt="Hospital Project"
        className="object-fit h-full w-full rounded-md"
      />
      
    </div>
      </>
    )
  }
  export const Card3 = () => {
    return (
      <>   <div className="h-[200px] w-[200px] m-5 p-2 glass-effect rounded-md">
      <img
        src={ghost}
        alt="ghost Project"
        className="object-fit h-full w-full rounded-md"
      />
      
    </div>
      </>
    )
  }
  export const Card4 = () => {
    return (
      <>   <div className="h-[200px] w-[200px] m-5 p-2 glass-effect rounded-md">
      <img
        src={snake}
        alt="snake Project"
        className="object-fit h-full w-full rounded-md"
      />
      
    </div>
      </>
    )
  }
  export const Card5 = () => {
    return (
      <>   <div className="h-[200px] w-[200px] m-5 p-2 glass-effect rounded-md">
      <img
        src={todo}
        alt="Todo Project"
        className="object-fit h-full w-full rounded-md"
      />
      
    </div>
      </>
    )
  }
