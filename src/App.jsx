
import Portfolio from "./components/portfolio";
import  {Navbar}  from "./components/Navbar";
import "./index.css"

import { Buttons } from "./components/Buttons";

function App() {
  

  return (
    <>
      <div className="h-max">
        <Navbar />
        <Portfolio/>
       
       
      </div>
    </>
  );
}

export default App;
