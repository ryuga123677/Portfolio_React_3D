
import Portfolio from "./components/portfolio";
import  {Navbar}  from "./components/Navbar";
import "./index.css"

import { Buttons } from "./components/Buttons";

function App() {
  

  return (
    <>
      <div className="bg-gray-900">
        <Navbar />
        <Portfolio/>
       
       
      </div>
    </>
  );
}

export default App;
