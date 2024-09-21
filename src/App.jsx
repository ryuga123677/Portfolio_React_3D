
import Portfolio from "./components/portfolio";
import  {Navbar}  from "./components/Navbar";
import "./index.css"
import { Buttons } from "./components/Buttons";
function App() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Navbar />
        <Portfolio />
       
      </div>
    </>
  );
}

export default App;
