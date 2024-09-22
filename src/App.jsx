
import Portfolio from "./components/portfolio";
import  {Navbar}  from "./components/Navbar";
import "./index.css"

import { Buttons } from "./components/Buttons";

function App() {
  

  return (
    <>
      <div className="flex flex-col flex-grow h-[100vh] bg-gray-900">
        <Navbar />
        <Portfolio/>
       
       
      </div>
    </>
  );
}

export default App;
