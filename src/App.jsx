import { useState } from "react"
// import './app.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0); 

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden"> 
        <Navbar />
        <Home /> 
        <About />
        <Projects />
        <Footer />
    </div>
  )
}

export default App
