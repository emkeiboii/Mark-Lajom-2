import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import LSide from "./components/LSide";
import Navbar from "./components/Navbar";
import RSide from "./components/RSide";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-between">
        <LSide></LSide>
        <div>
          <Hero></Hero>
          <About></About>
          <Work></Work>
          <Contact></Contact>
        </div>
        <RSide></RSide>
      </div>
    </>
  );
}

export default App;
