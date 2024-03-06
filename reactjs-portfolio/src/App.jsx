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
const colors = {
  brightRed: "#FA2223",
  yellow: "#F8CD02",
  brightBlue: "#00A3E0",
  darkBlue: "#153149",
  darkGreen: "#152514",
  brightGreen: "#029220",
  darkRed: "#9D0620",
};

export default function App() {
  const [choosing, setChoosing] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#FA2223");
  const [secondaryColor, setSecondaryColor] = useState("#F8CD02");

  const handleColorChange = (hexCode, colorType) => {
    if (colorType === "primary") {
      setPrimaryColor(hexCode);
      console.log(colorType, hexCode);
    } else if (colorType === "secondary") {
      setSecondaryColor(hexCode);
      console.log(colorType, hexCode);
    }
  };

  useEffect(() => {
    setChoosing(true);
    setTimeout(() => {
      setChoosing(false);
    }, 50000);
  }, []);

  return (
    <>
      {choosing ? (
        <LoadingScreen
          colors={colors}
          onColorChange={(hexCode, colorType) =>
            handleColorChange(hexCode, colorType)
          }
        />
      ) : (
        <div className="flex justify-center items-center ">
          <div>
            <Navbar primary={primaryColor} secondary={secondaryColor} />

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
