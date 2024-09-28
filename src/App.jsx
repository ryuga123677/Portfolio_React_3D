
import Portfolio from "./components/portfolio";
import  {Navbar}  from "./components/Navbar";
import "./index.css"

import { Buttons } from "./components/Buttons";

function App() {
  

  return (
    <>
      <div style={{backgroundColor: "#C59B49"}} className="flex flex-col">
        <Navbar />
        <Portfolio/>
       
       
      </div>
    </>
  );
}

export default App;
