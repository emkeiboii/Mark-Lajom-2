import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LSide from "./components/LSide";
import Navbar from "./components/Navbar";
import RSide from "./components/RSide";
import Work from "./components/Work";
import { PuffLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <PuffLoader color="#5EDAE9" className="-mt-half-screen" />
      ) : (
        <div>
          <Navbar></Navbar>

          <div className="flex justify-between">
            <LSide></LSide>
            <div className="lg:px-32 w-full md:px-8 sm:px-4">
              <Hero></Hero>
              <About></About>
              <Work></Work>
              <Contact></Contact>
              <Footer></Footer>
            </div>
            <RSide></RSide>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
