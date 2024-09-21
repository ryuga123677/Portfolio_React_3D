
import Portfolio from "./components/portfolio";
import  {Navbar}  from "./components/Navbar";
import "./index.css"

import { Buttons } from "./components/Buttons";
import { Projects } from "./components/Projects";
function App() {
  

  return (
    <>
      <div className="">
        <Navbar />
        <Portfolio />
        <Projects/>
       
      </div>
    </>
  );
}

export default App;
