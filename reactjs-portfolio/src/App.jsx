import "./App.css";
import About from "./components/About.jsx";
// import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import LSide from "./components/LSide.jsx";
import Navbar from "./components/Navbar.jsx";
import RSide from "./components/RSide.jsx";
import Work from "./components/Work.jsx";
// import Accordion from "./components/Accordion.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { useEffect, useState } from "react";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [choosing, setChoosing] = useState(false);

  useEffect(() => {
    setChoosing(true);
    setTimeout(() => {
      setChoosing(false);
    }, 0);
  }, []);

  return (
    <>
      {choosing ? (
        <LoadingScreen className="absolute" />
      ) : (
        <div className="flex justify-center items-center ">
          <div>
            <Navbar primary="brightRed" />

            <div className="flex justify-between">
              <LSide></LSide>
              <div className="lg:px-32 w-full md:px-8 sm:px-4">
                <Hero></Hero>
                <About></About>
                <Work></Work>
                {/* <Accordion /> */}
                <Contact />
                <Footer></Footer>
              </div>
              <RSide></RSide>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
