import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import LSide from "./components/LSide.jsx";
import Navbar from "./components/Navbar.jsx";
import RSide from "./components/RSide.jsx";
import Work from "./components/Work.jsx";
import { PuffLoader } from "react-spinners";

export default function App() {
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
